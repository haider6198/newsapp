import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newUrl}=this.props
        return (
            <div>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body my-6">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newUrl} target="blank" className="btn btn-sm btn-dark">chek detail</a>
                </div>
            </div>
              </div>
        )
    }
}

export default NewsItem

// src="https://image.cnbcfm.com/api/v1/image/107151163-16684341972022-11-14t105959z_1388542881_rc2mlx9y9ccs_rtrmadp_0_ukraine-crisis-kherson-zelenskiy.jpeg?v=1668435841&w=1920&h=1080"