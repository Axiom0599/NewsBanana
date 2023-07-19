// import React, { Component } from "react";
// import Newsitem from "/Users/nunu5/Desktop/newsapp/src/Components/Newsitem.js";
// import Spinner from "/Users/nunu5/Desktop/newsapp/src/Components/Spinner.js";
// import PropTypes from "prop-types";

// export class Newsroom extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 6,
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0,
//     };
//     document.title =  `${this.props.category} - NewsBanana`;
//   }

//   async componentDidMount() {
//     this.updateNews();
//   }

//   async updateNews() {
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=95a20529787b44f4a4d567be9fb691fd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   }

//   async componentDidMount() {
//     this.updateNews();
//   }

//   onPrevClick = async () => {
//     this.setState(
//       (prevState) => ({
//         page: prevState.page - 1,
//       }),
//       () => this.updateNews()
//     );
//   };

//   onNextClick = async () => {
//     this.setState(
//       (prevState) => ({
//         page: prevState.page + 1,
//       }),
//       () => this.updateNews()
//     );
//   };


//   render() {
//     const h1Style = {
//       color: 'dark blue',
//       fontSize: '38px',
//       fontWeight: 'bold',
//       marginTop: "50px",
//       marginBottom: "50px"
//     };
//     return (
//       <div className="container my-3">
//         <h1 className="container text-center" style={h1Style}>
//           JournalBanana - Your go-to News Aggregator
//         </h1>

//         {this.state.loading && <Spinner />}
//         <div className="row">
//           {!this.state.loading &&
//             this.state.articles.map((element) => (
//               <div className="col-md-4" key={element.url}>
//                 <Newsitem
//                   title={element.title ? element.title : ""}
//                   description={element.description ? element.description : ""}
//                   imageUrl={element.urlToImage}
//                   newsUrl={element.url}
//                   author={element.author}
//                   publishedDate={element.publishedAt}
//                   source={element.source.name}
//                 ></Newsitem>
//               </div>
//             ))}
//         </div>

//         <div className="container d-flex justify-content-between">
//           <button
//             disabled={this.state.page <= 1}
//             type="button"
//             className="btn btn-info"
//             onClick={this.onPrevClick}
//           >
//             &larr; Previous
//           </button>
//           <button
//             disabled={
//               this.state.page + 1 >
//               Math.ceil(this.state.totalResults / this.props.pageSize)
//             }
//             className="btn btn-info"
//             onClick={this.onNextClick}
//             type="button"
//           >
//             Next &rarr;
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Newsroom;
