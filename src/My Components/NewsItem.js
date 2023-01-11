import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description}=this.props;
    return (
      <>
      <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="https://storage.googleapis.com/afs-prod/media/2dced0077df94935b04a07d10a13bf30/3000.jpeg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </>
    )
  }
}

export default NewsItem




// https://newsapi.org/v2/top-headlines?country=in&apiKey=603b756ed8f64fddac80a3cbab48e2d0&q=cricket