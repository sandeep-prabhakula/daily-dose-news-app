import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


const News = (props) => {

    const [articles, setArticles] = useState([]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://inshorts.deta.dev/news?category=${props.category}`
        console.log(props.category)
        let data = await fetch(url)
        props.setProgress(50)
        let parseData = await data.json()
        console.log(parseData)
        props.setProgress(70)
        setArticles(parseData.data)
        props.setProgress(100)
    }

    useEffect(() => {
        document.title = `DailyDose - ${capitalizeFirstLetter(props.category)}`
        props.setProgress(0)
        updateNews()
        // eslint-disable-next-line
    }, [])
    return (
        <div style={{
            backgroundColor: props.mode === 'light' ? '#fff' : '#000',
            color: props.mode === 'light' ? '#000' : '#fff'
        }}>
            <h1 className='text-center' style={{
                marginTop: '55px'
            }}>Daily Dose - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            <div className='container'>
                <div className="row">
                    {articles.map((element) => {
                        return <div key={element.url} className="col-md-4">
                            <NewsItem title={element.title ? element.title : ""}
                                description={element.content ? element.content : ""}
                                imageURL={element.imageUrl ? element.imageUrl : "https://i.ytimg.com/vi/z2T9NDVpzXk/hqdefault.jpg"}
                                newsURL={element.url}
                                date={element.date}
                                source="InShorts"
                                author={!element.author ? "---" : element.author} mode={props.mode} />
                        </div>
                    })}
                </div>
            </div>
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
