import React, { Component } from 'react';
import './ArticleEdit.css';

import Editor from '../DraftComponent/Draft';
import { ReactComponent as DragAndDropIcon } from './icon/picture-icon.svg';
import {convertToRaw} from "draft-js";
import Article from "../ArticleComponent/Article";

export default class ArticleEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleId: this.props.match.params.articleId,
            article: {
                title: "",
                content: "",
                author: "",
                background: "",
                category: "",
                tag: [],
                public: false,
                publicationDate: ""
            }
        }
    }

    componentDidMount() {
        let date = new Date().toLocaleString();
        this.setState({
            articleId: "toto",
            article: {
                title: "HelloWorld",
                content: "Ego vero sic intellego, Patres conscripti, nos hoc tempore in provinciis decernendis perpetuae pacis habere oportere rationem. Nam quis hoc non sentit omnia alia esse nobis vacua ab omni periculo atque etiam suspicione belli?",
                author: "Marine Roch",
                background: "background.png",
                category: "Style de vie",
                tag: ["Tag 1", "Tag 2"],
                public: true,
                publicationDate: date
            }});
    }

    handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ article: { ...this.state.article, [name] : value } });
    };

    onSave = () => {
        convertToRaw(this.state.editorState.getCurrentContent());
    };

    render() {
        const ArticleEdit = this.state.article;
        return (
            <div className="Article">
                <div className="ArticleForm">
                    <div className="ArticleFormLabels">
                        <label>
                            <input name="title" type="text" required value={ArticleEdit.title} onChange={this.handleInputChange} />
                            <span className="placeholder">Titre</span>
                        </label>
                        <label>
                            <input name="category" type="text" required value={ArticleEdit.category} onChange={this.handleInputChange} />
                            <span className="placeholder">Catégorie</span>
                        </label>
                        <label>
                            <input name="tag" type="text" required value={ArticleEdit.tag} onChange={this.handleInputChange} />
                            <span className="placeholder">Tags</span>
                        </label>
                    </div>
                    <div className="ArticleFormBackground">
                        <DragAndDropIcon className="icon" /><span>Déposer votre image ici !</span>
                    </div>
                </div>
                <Editor />
                <Article article={ArticleEdit} />
            </div>
        );
    }
}
