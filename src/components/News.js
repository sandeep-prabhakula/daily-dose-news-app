import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
    }

    PropTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `DailyDose - ${this.capitalizeFirstLetter(this.props.category)}`
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async updateNews() {
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        this.props.setProgress(50)
        let parseData = await data.json()
        this.props.setProgress(70)
        this.setState({
            loading: false,
            articles: parseData.articles,
            totalResults: parseData.totalResults
        })
        this.props.setProgress(100)
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults
        })
    };
    async componentDidMount() {
        this.props.setProgress(0)
        this.updateNews()
    }
    render() {
        let { mode } = this.props
        return (
            <div style={{
                backgroundColor: mode === 'light' ? '#fff' : '#000',
                color: mode === 'light' ? '#000' : '#fff'
            }}>
                <h1 className='text-center'>Ape News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='container ' >
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div key={element.url} className="col-md-4">
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
                                        description={element.description ? element.description.slice(0, 88) : ""}
                                        imageURL={element.urlToImage ? element.urlToImage : "https://i.ytimg.com/vi/z2T9NDVpzXk/hqdefault.jpg"}
                                        newsURL={element.url}
                                        date={element.publishedAt}
                                        source={!element.source.name ? "---" : element.source.name}
                                        author={!element.author ? "---" : element.author} mode={mode} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default News
