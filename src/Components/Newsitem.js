import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      publishedDate,
      source,
    } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="badge badge-danger">{source}</span>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="src/components/pexels-daka-13324150.jpeg"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <u>
              <p>
                <small className="text-muted">
                  Published by {!author ? "unknown" : author}
                  on {publishedDate}
                </small>
              </p>{" "}
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
                Read More
              </a>
            </u>
          </div>
        </div>
      </div>
    );
  }
}
