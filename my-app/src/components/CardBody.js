// Display single card
import React, { Component } from "react";

export default class CardBody extends Component {
    render() {
        const post = this.props.post 
        return(
            <div className="card text-center mt-3">
                <div className="card-title fw-bold">{post.title}</div>
                <div className="card-body">{post.body}</div>
                <div className="card-subtitle fw-italic">&mdash;{post.user.first_name} {post.user.last_name}</div>
                
            </div>
        
        )
    }
}