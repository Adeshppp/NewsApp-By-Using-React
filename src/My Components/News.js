import React, { Component } from 'react'
import NewsItem from "./NewsItem";

export class News extends Component {

    constructor(){
        super();
        console.log("Hellow i am in constructor of News component");
        this.state={
            articles: [],
            loading:false,
            page:1,
            pageSize:18
        }
    }
    async componentDidMount(){
        console.log("cdm");
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=603b756ed8f64fddac80a3cbab48e2d0&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data= await fetch(url);
        let parsedData=await data.json();
        // console.log(data);
        this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults })
    }
     handleNextClick=async ()=>{
        if(this.state.page+1>Math.ceil(this.state.totalResults/this.state.pageSize)){}
        else{
        console.log("next click");
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=603b756ed8f64fddac80a3cbab48e2d0&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data= await fetch(url);
        let parsedData=await data.json();
        // console.log(data);
        this.setState({
            page:this.state.page+1,
            articles: parsedData.articles

        })
    }
    }
     handlePrevClick=async ()=>{
        console.log("prev click");
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=603b756ed8f64fddac80a3cbab48e2d0&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data= await fetch(url);
        let parsedData=await data.json();
        // console.log(data);
        this.setState({
            page:this.state.page-1,
            articles: parsedData.articles

        })
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
                <button disabled={this.state.page<=1} type="button my-3" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;  Previous</button>
                <button disabled={this.state.flag} type="button my-3" className="btn btn-dark" onClick={this.handleNextClick}>Next  &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
