import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
        return (
            <>
                <div className="card my-3" >
                    <img className="card-img-top" src={!imgUrl ? "https://www.shutterstock.com/image-vector/breaking-news-live-on-world-600w-1891457170.jpg" : imgUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <span className="badge rounded-pill text-bg-dark">Source : {source}</span>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>

                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
