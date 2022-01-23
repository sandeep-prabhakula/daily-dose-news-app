import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageURL, newsURL, date, source, author, mode } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{
                    backgroundColor: mode === 'light' ? '#fff' : '#072b4e',
                    color: mode === 'dark' ? '#fff' : '#000'
                }}>
                    <span className="d-flex justify-content-end position-absolute top-0 translate-middle badge round-pill bg-danger right-0" style={{
                        left:'90%',zIndex:'1'
                    }}>
                        {source}
                    </span>
                    <img src={imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p><strong>PublishedAt :</strong> {date}</p>
                        <p><strong>Author :</strong> {author}</p>
                        <a href={newsURL} className="btn btn-sm btn-primary" target="_blank">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
