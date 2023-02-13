import React, { Component } from 'react'
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';

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
            loading: true,
            page: 1,
            apiKey: this.props.apiKey,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News`;
    }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.state.apiKey}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }

    fetchMoreData=async()=>{
        this.setState({page:this.state.page+1})
        fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.state.apiKey}&category=${this.props.category}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`)
            .then(res => res.json())
            .then(parsedData => this.setState({ page: this.state.page + 1, articles: this.state.articles.concat(parsedData.articles), }))
            .catch(error => this.setState({ error }));
    }

    // handleNextClick = async () => {
    //         this.setState({ page: this.state.page + 1 });
    //         this.updateNews();
        
    //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            // this.setState({ loading: true })
            // fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.state.apiKey}&category=${this.props.category}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`)
            //     .then(res => res.json())
            //     .then(parsedData => this.setState({ page: this.state.page + 1, articles: parsedData.articles, }))
            //     .catch(error => this.setState({ error }));
            // this.setState({ loading: false })
    //     // }

    // }
    // handlePrevClick = async () => {
    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews();
    
    //     // this.setState({ loading: true })
    //     // fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.state.apiKey}&category=${this.props.category}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`)
    //     //     .then(res => res.json())
    //     //     .then(parsedData => this.setState({ page: this.state.page - 1, articles: parsedData.articles, }))
    //     //     .catch(error => this.setState({ error }));
    //     // this.setState({ loading: false })
    // }

    async componentDidMount() {

        this.updateNews();
    }
    render() {
        return (
            <>
                {this.state.error ? (
                    <div>An error occurred. Please try again later.</div>
                ) : (
                    <div className='container my-3 '>
                        <h1 className="text-center">Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                        <div className="text-center">{this.state.loading && <Spinner />}</div>
                        <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={<Spinner />}
                        >
                            <div className="container">
                            <div className="row">
                                {!this.state.loading && this.state.articles.map((element) => {
                                    return <div className="col-md-4" key={element.url}>
                                        <NewsItem title={element.title} description={element.description} newsUrl={element.url} imgUrl={element.urlToImage} date={element.publishedAt} author={element.author} source={element.source.name} />
                                    </div>
                                })}
                            </div>
                            </div>
                        </InfiniteScroll>
                      
                    </div>
                )}
            </>
        )
    }
}

export default News


