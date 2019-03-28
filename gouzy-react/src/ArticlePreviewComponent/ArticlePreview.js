import React from 'react';
import { Link } from "react-router-dom";
import './ArticlePreview.css';

export default function ArticlePreview(props)  {
    return (
        <div className="ArticlePreview">
            <h1><Link to={"/edit/" + props.name}>{props.name}</Link></h1>
            <p>{props.content}</p>
        </div>
    );
}