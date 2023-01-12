import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title, description, imgUrl , newsUrl} = this.props;
        return (
            <>
                <div className="card my-3" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={imgUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/detailedNews" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem




// https://newsapi.org/v2/top-headlines?country=in&apiKey=603b756ed8f64fddac80a3cbab48e2d0&q=cricket