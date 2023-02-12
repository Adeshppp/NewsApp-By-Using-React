import React, { Component } from 'react'
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import PropTypes from 'prop-types'

export class News extends Component {

    // static defaultProps = {
    //     country: 'in',
    //     pageSize: 8
    // }

    // static propTypes = {
    //     name: PropTypes.string,
    //     pageSize: PropTypes.number
    // }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            apiKey: this.props.apiKey
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News`;
    }
    // async updateNews(){
    //     this.setState({ loading: true })
    //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    // }

    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            this.setState({ loading: true })
            fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.state.apiKey}&category=${this.props.category}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`)
                .then(res => res.json())
                .then(parsedData => this.setState({ page: this.state.page + 1, articles: parsedData.articles, }))
                .catch(error => this.setState({ error }));
            this.setState({ loading: false })
        }

    }
    handlePrevClick = async () => {
        this.setState({ loading: true })
        fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.state.apiKey}&category=${this.props.category}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`)
            .then(res => res.json())
            .then(parsedData => this.setState({ page: this.state.page - 1, articles: parsedData.articles, }))
            .catch(error => this.setState({ error }));
        this.setState({ loading: false })
    }

    async componentDidMount() {
        if (this.state.apiKey) {
            this.setState({ loading: true });
            fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.state.apiKey}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`)
                .then(res => res.json())
                .then(parsedData => this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults }))
                .catch(error => this.setState({ error }));
            this.setState({ loading: false });
        }
    }
    render() {
        return (
            <div>
                {this.state.error ? (
                    <div>An error occurred. Please try again later.</div>
                ) : (
                    <div className='container my-3 '>
                        <h1 className="text-center">Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                        <div className="text-center">{this.state.loading && <Spinner />}</div>
                        <div className="row">
                            {!this.state.loading && this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} newsUrl={element.url} imgUrl={element.urlToImage} date={element.publishedAt} author={element.author} source={element.source.name} />
                                </div>
                            })}
                        </div>
                        <div className=" d-flex justify-content-between" >
                            <button disabled={this.state.page <= 1} type="button my-3" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;  Previous</button>
                            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button my-3" className="btn btn-dark" onClick={this.handleNextClick}>Next  &rarr;</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default News


// curl -I https://newsapi.org/v2/top-headlines?country=us&apiKey=f4db36aa4f83445687fb7e57bd5c6f19&category=general&page=1&pageSize=18