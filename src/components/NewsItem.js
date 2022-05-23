import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl,newsUrl } = this.props;
    return (
      <>
        <div className="card" >
          <img
            src={!imgUrl?"https://gaadiwaadi.com/wp-content/uploads/2022/05/Rolls-Royce-Boat-Tail-Front.jpg": imgUrl }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description} ...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
