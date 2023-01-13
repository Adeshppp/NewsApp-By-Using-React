import React, { Component } from 'react'
import NewsItem from "./NewsItem";

export class News extends Component {

    constructor(){
        super();
        console.log("Hellow i am in constructor of News component");
        this.state={
            articles: [],
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
        console.log("cdm");
        let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=603b756ed8f64fddac80a3cbab48e2d0";
        let data= await fetch(url);
        let parsedData=await data.json();
        console.log(data);
        this.setState({articles: parsedData.articles})
    }
    render() {
        console.log("render");
        return (
            <div className='container my-3 '>
                <h2>Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return  <div className="col-md-4" key={element.url}>
                     <NewsItem  title={element.title} description={element.description} newsUrl={element.url} imgUrl={element.urlToImage} />
                 </div>
                })}

                   
                    

                </div>
                <div className=" d-flex justify-content-between" >
                <button type="button my-3" class="btn btn-dark">Previous</button>
                <button type="button my-3" class="btn btn-dark">Next</button>
                </div>
            </div>
        )
    }
}

export default News