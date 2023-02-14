import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // document.title = `${capitalizeFirstLetter(props.category)} - News`;

  const updateNews = async () => {
    props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(60);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${
          props.apiKey
        }&category=${props.category}&page=${page + 1}&pageSize=${
          props.pageSize
        }`
      );
      const parsedData = await res.json();
      setPage(page + 1);
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setError(null);
    } catch (error) {
      setError(error);
    }
  };

  // handleNextClick = async () => {
  //         setPage(page+1);
  //         updateNews();
  // }

  // handlePrevClick = async () => {
  //      setPage(page-1);
  //     updateNews();
  // }

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <>
      {error ? (
        <div>An error occurred. Please try again later.</div>
      ) : (
        <div className="container my-3 ">
          <h1 className="text-center">
            Top {capitalizeFirstLetter(props.category)} Headlines
          </h1>
          <div className="text-center">{loading && <Spinner />}</div>
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {!loading &&
                  articles.map((element) => {
                    return (
                      <div className="col-md-4" key={element.url}>
                        <NewsItem
                          title={element.title}
                          description={element.description}
                          newsUrl={element.url}
                          imgUrl={element.urlToImage}
                          date={element.publishedAt}
                          author={element.author}
                          source={element.source.name}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      )}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
};

News.propTypes = {
  name: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
