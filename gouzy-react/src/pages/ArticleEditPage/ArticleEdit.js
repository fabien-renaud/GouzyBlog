import React, { Component } from 'react';

import Article from "../ArticlePage/Article";
import Editor from '../../components/DraftComponent/Draft';
import { ReactComponent as DragAndDropIcon } from './icon/picture-icon.svg';
import './ArticleEdit.css';

export default class ArticleEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {}
        };

        this.editor = {};
    }

    componentDidMount() {
        // this.setState({article: articleStore.get(this.props.match.params.articleId)});
        this.setState({article: {
                name: "HelloWorld",
                content: "Ego vero sic intellego, Patres conscripti, nos hoc tempore in provinciis decernendis perpetuae pacis habere oportere rationem. Nam quis hoc non sentit omnia alia esse nobis vacua ab omni periculo atque etiam suspicione belli?",
                author: "Marine Roch",
                background: "background.png",
                category: "Style de vie",
                tag: ["Tag 1", "Tag 2"],
                public: true,
                publicationDate: "a"
            }});
    }

    handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({ article: { ...this.state.article, [name] : value } });
    };

    // handleArrayInputChange = (e) => {
    //     let name = e.target.name;
    //     let value = e.target.value;
    //     let arr = value.split(",");
    //     this.setState({ article: { ...this.state.article, [name] : value } });
    // };

    onEditorChange = (editor) => {
        this.editor = editor;
    };

    onSave = () => {
        console.log(this.editor);
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
                <Editor onChange={this.onEditorChange} />
                <button onClick={this.onSave}>Save</button>
                <p>{JSON.stringify(this.editor)}</p>
                <Article article={ArticleEdit} />
            </div>
        );
    }
}
