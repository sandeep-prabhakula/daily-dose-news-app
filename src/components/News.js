import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(50)
        let parseData = await data.json()
        props.setProgress(70)
        setLoading(false)
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        props.setProgress(100)
    }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page + 1)
        let data = await fetch(url)
        let parseData = await data.json()
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
    };

    useEffect(() => {
        document.title = `DailyDose - ${capitalizeFirstLetter(props.category)}`
        props.setProgress(0)
        updateNews()
    }, [])
    return (
        <div style={{
            backgroundColor: props.mode === 'light' ? '#fff' : '#000',
            color: props.mode === 'light' ? '#000' : '#fff'
        }}>
            <h1 className='text-center' style={{
                marginTop:'50px'
            }}>Ape News - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='container ' >
                    <div className="row">
                        {articles.map((element) => {
                            return <div key={element.url} className="col-md-4">
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
                                    description={element.description ? element.description.slice(0, 88) : ""}
                                    imageURL={element.urlToImage ? element.urlToImage : "https://i.ytimg.com/vi/z2T9NDVpzXk/hqdefault.jpg"}
                                    newsURL={element.url}
                                    date={element.publishedAt}
                                    source={!element.source.name ? "---" : element.source.name}
                                    author={!element.author ? "---" : element.author} mode={props.mode} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}


News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
