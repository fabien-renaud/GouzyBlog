import React, { Component } from 'react';
import './ArticlePreview.css';

export default class ArticlePreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            content: this.props.content,
        }
    }

    render() {
        const ArticlePreview = this.state;
        return (
            <div className="ArticlePreview">
                <p>Hello</p>
                <h1>{ArticlePreview.name}</h1>
                <p>{ArticlePreview.content}</p>
            </div>
        );
    }
}