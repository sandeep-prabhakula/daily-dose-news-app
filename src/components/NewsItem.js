import React from 'react'

const NewsItem = (props) => {

    return (
        <div className='my-3'>
            <div className="card" style={{
                backgroundColor: props.mode === 'light' ? '#fff' : '#072b4e',
                color: props.mode === 'dark' ? '#fff' : '#000'
            }}>
                <span className="d-flex justify-content-end position-absolute top-0 translate-middle badge round-pill bg-danger right-0" style={{
                    left: '80%', zIndex: '1'
                }}>
                    {props.source}
                </span>
                <img src={props.imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}...</p>
                    <p><strong>PublishedAt :</strong> {props.date}</p>
                    <p><strong>Author :</strong> {props.author}</p>
                    <a href={props.newsURL} className="btn btn-sm btn-primary" target="_blank">Read more</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
