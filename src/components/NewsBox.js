import React from 'react';
import imagena from '../images.png';

function NewsBox(props) {
    return (
        <div>
            <div className="card">
                <img src={props.image?props.image:imagena} className="card-img-top"  alt="load-fl"/>
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.description}</p>
                  <p className="card-text text-danger"><small> on {new Date(props.date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</small></p>
                  <a href={props.url} target="_blank" className="btn btn-sm btn-outline-secondary">Open News</a>
                </div>
            </div>
        </div>
    )
}

export default NewsBox;
