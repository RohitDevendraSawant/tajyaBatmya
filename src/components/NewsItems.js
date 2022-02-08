import React from 'react'

const NewsItems=(props)=> {
        let { title, description, imageUrl, url, author, source, publishedAt } = props;
        return (
            <div className="card my-2" style={{ width: "18rem" }}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}..</h5>
                    <p className="card-text">{description}..</p>
                    <a href={url} className="btn btn-primary" target="_blank" rel="noreferrer">Read more</a>
                    <p className="card-text"><small className="text-muted">Written by {author} published at {new Date(publishedAt).toGMTString()}</small></p>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
            </div>

        )
    
}

export default NewsItems
