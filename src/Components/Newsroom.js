import React, { Component } from "react";
import Newsitem from "/Users/nunu5/Desktop/newsapp/src/Components/Newsitem.js";
import Spinner from "/Users/nunu5/Desktop/newsapp/src/Components/Spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export class Newsroom extends Component {


  static defaultProps = {
    country: "in",
    pageSize: 6,
    apiKey: process.env.REACT_APP_NEWSAPI
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${capitalizeFirstLetter(props.category)} - NewsBanana`;
  }







    updateNews = async() => {
      this.props.setProgress(0);
      
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }


  async componentDidMount() {
    this.updateNews();
  }







 fetchData = async () => { 
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  this.setState({page: this.state.page + 1});
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({
    articles: this.state.articles.concat(parsedData.articles),
    totalResults: parsedData.totalResults,

  })}






  



  render() {

    const h1Style = {
      color: "dark blue",
      fontSize: "38px",
      fontWeight: "bold",
      marginTop: "50px",
      marginBottom: "50px",
    };
    return (
      <div className="container my-3">
        <h1 className="container text-center" style={h1Style}>
          NewsBanana - Your go-to News Aggregator
        </h1>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchData}
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader={<Spinner/>}
        >

      <div className="container">
      <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  publishedDate={element.publishedAt}
                  source={element.source.name}
                ></Newsitem>
              </div>
  })}
          </div>
      </div>
        </InfiniteScroll>


      </div>
    );
  }
}

export default Newsroom;
