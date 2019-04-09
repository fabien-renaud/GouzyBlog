import React from 'react';
import './Article.css';

export default function Article(props) {
    const ArticleID = props.match ? props.match.params.articleId : undefined;
    let Article = {};

    if (ArticleID) {
        // Get Article from API
        Article = {
            title: "HelloWorld",
            content: "Ego vero sic intellego, Patres conscripti, nos hoc tempore in provinciis decernendis perpetuae pacis habere oportere rationem. Nam quis hoc non sentit omnia alia esse nobis vacua ab omni periculo atque etiam suspicione belli?",
            author: "Marine Roch",
            background: "background.png",
            category: "Style de vie",
            tag: ["Tag 1", "Tag 2"],
            public: true,
            publicationDate: new Date().toLocaleString()
        }
    } else if (props.article) {
        Article = props.article;
    }

    return (
        <div className="ArticlePreview">
            <h1>{Article.title}</h1>
            <p>{Article.author} - {Article.publicationDate}</p>
            <p>{Article.content}</p>
        </div>
    );
}
