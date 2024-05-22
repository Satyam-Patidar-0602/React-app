import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
      return ( <div>
       <div className="my-3" style={{width: "18rem"}}>
              <img src={!imageUrl?"https://newsapi.ai/landing/img/logo.png":imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title} <span class="badge bg-success">{source}</span></h5>
                <p className="card-text">{description}...</p>
                <p class="card-text"><small class="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="blank" className="btn btn-sm btn btn-dark">Read More</a>
        </div> 
      </div>
      </div>
    )
  }
}

export default NewsItem
