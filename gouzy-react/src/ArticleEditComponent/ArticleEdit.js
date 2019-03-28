import React, { Component } from 'react';
import './Article.css';

export default class ArticleEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleId: this.props.match.params.articleId
        }
    }

    render() {
        const ArticlePreview = this.state;
        return (
            <div className="ArticlePreview">
                <p>Hello</p>
                <p>{ArticlePreview.articleId}</p>
            </div>
        );
    }
}
