import React, { Component } from 'react'
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

    // static defaultProps = {
    //     country: 'in',
    //     pageSize: 8
    // }

    // static propTypes = {
    //     name: PropTypes.string,
    //     pageSize: PropTypes.number
    // }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            apikey:"f4db36aa4f83445687fb7e57bd5c6f19"
        }
    }
    // async updateNews(){
    //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=603b756ed8f64fddac80a3cbab48e2d0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true })
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
        
    // }
    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.state.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
        // this.updateNews();
    }
    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            this.setState({ loading: true })
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.state.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
        // this.setState({page:this.state.page+1});
        // this.updateNews();
    }
    handlePrevClick = async () => {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.state.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
        // this.setState({page:this.state.page-1});
        // this.updateNews();
    }
    render() {
        console.log("render");
        return (
            <div className='container my-3 '>
                <h1 className="text-center">Top Headlines </h1>
                <div className="text-center">{this.state.loading && <Spinner />}</div>
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} newsUrl={element.url} imgUrl={element.urlToImage} date={element.publishedAt} author={element.author} source={element.source.name}/>
                        </div>
                    })}
                </div>
                <div className=" d-flex justify-content-between" >
                    <button disabled={this.state.page <= 1} type="button my-3" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;  Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button my-3" className="btn btn-dark" onClick={this.handleNextClick}>Next  &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
