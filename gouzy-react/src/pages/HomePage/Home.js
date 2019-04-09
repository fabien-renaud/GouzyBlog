import React, { Component } from 'react';
import './Home.css';

import ArticlePreview from '../../components/ArticlePreviewComponent/ArticlePreview';
import articleStore from "../../stores/ArticleStore";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: articleStore.getAll()
        };
    }

    render() {
        const home = this.state;

        const Articles = home.articles.map(article => {
            return <ArticlePreview name={article.name} content={article.content} />;
        });

        return (
            <div className="App">
                {Articles}
            </div>
        );
    }
}
