import React, { Component } from 'react'
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {

    constructor(){
        super();
        this.state={
            articles: [],
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=603b756ed8f64fddac80a3cbab48e2d0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults, loading:false })
    }
     handleNextClick=async ()=>{
        if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=603b756ed8f64fddac80a3cbab48e2d0&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({
            page:this.state.page+1,
            articles: parsedData.articles,
            loading:false
        })
    }
    }
     handlePrevClick=async ()=>{
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=603b756ed8f64fddac80a3cbab48e2d0&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({
            page:this.state.page-1,
            articles: parsedData.articles,
            loading:false
        })
    }
    render() {
        console.log("render");
        return (
            <div className='container my-3 '>
                <h1 className="text-center">Top Headlines </h1>
                <div className="text-center">{this.state.loading && <Spinner />}</div>
                <div className="row">
                {!this.state.loading &&this.state.articles.map((element)=>{
                    return  <div className="col-md-4" key={element.url}>
                     <NewsItem  title={element.title} description={element.description} newsUrl={element.url} imgUrl={element.urlToImage} />
                 </div>
                })}




                </div>
                <div className=" d-flex justify-content-between" >
                <button disabled={this.state.page<=1} type="button my-3" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;  Previous</button>
                <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button my-3" className="btn btn-dark" onClick={this.handleNextClick}>Next  &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
