import React from 'react'
import { Link } from 'react-router-dom'

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
                    <p className="card-text text-truncate">{props.description}</p>
                    <p><strong>PublishedAt :</strong> {props.date}</p>
                    <p><strong>Author :</strong> {props.author}</p>
                    <a href={props.videoURL} target="_blank" rel="noopener noreferrer"></a>
                    <a className='btn btn-primary' href={`${props.newsURL}`}>Read more</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
