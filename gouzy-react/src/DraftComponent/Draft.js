import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
// import { convertToRaw, convertFromRaw, Editor, EditorState, Modifier, RichUtils } from 'draft-js';
import './Draft.css';
import './../../node_modules/draft-js/dist/Draft.css';

import { ReactComponent as Bold } from './icon/bold-icon.svg';
import { ReactComponent as Italic } from './icon/italic-icon.svg';
import { ReactComponent as Underline } from './icon/underline-icon.svg';
import { ReactComponent as Strikethrough } from './icon/strikethrough-icon.svg';

import { ReactComponent as Quote } from './icon/quote-icon.svg';
import { ReactComponent as Code } from './icon/code-icon.svg';
import { ReactComponent as Hyperlink } from './icon/hyperlink-icon.svg';

import { ReactComponent as AlignLeft } from './icon/align-left-icon.svg';
import { ReactComponent as AlignCenter } from './icon/align-center-icon.svg';
import { ReactComponent as AlignRight } from './icon/align-right-icon.svg';
import { ReactComponent as AlignJustify } from './icon/align-justify-icon.svg';

import { ReactComponent as DotList } from './icon/dot-list-icon.svg';
import { ReactComponent as NumberList } from './icon/number-list-icon.svg';
import { ReactComponent as IndentLeft } from './icon/indent-left-icon.svg';
import { ReactComponent as IndentRight } from './icon/indent-right-icon.svg';

import { ReactComponent as Undo } from './icon/undo-icon.svg';
import { ReactComponent as Redo } from './icon/redo-icon.svg';

export default class Draft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }

    // Editor handle methods
    handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    onChange = (editorState) => {this.setState({ editorState })};

    onClick = (type, value) => {
        switch (type) {
            case 'inline' :
                this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, value));
                break;
            case 'block' :
                this.onChange(RichUtils.toggleBlockType(this.state.editorState, value));
                break;
            case 'code' :
                this.onChange(RichUtils.toggleCode(this.state.editorState));
                break;
            default:
                break;
        }
    };

    onTab = (e) => {
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    };

    render() {
        return (
            <div className="draft">
                <div className="draft-toolbar">
                    <div className="draft-toolbar-group">
                        <div className="draft-toolbar-button" onClick={() => this.onClick("inline", "BOLD")}><Bold /></div>
                        <div className="draft-toolbar-button" onClick={() => this.onClick("inline", "ITALIC")}><Italic /></div>
                        <div className="draft-toolbar-button" onClick={() => this.onClick("inline", "UNDERLINE")}><Underline /></div>
                        <div className="draft-toolbar-button" onClick={() => this.onClick("inline", "STRIKETHROUGH")}><Strikethrough /></div>
                    </div>
                    <div className="draft-toolbar-group">
                        <div className="draft-toolbar-button" onClick={() => this.onClick("block", "header-one")}>H1</div>
                        <div className="draft-toolbar-button" onClick={() => this.onClick("block", "header-two")}>H2</div>
                        <div className="draft-toolbar-button" onClick={() => this.onClick("block", "header-three")}>H3</div>
                        <div className="draft-toolbar-button" onClick={() => this.onClick("block", "header-four")}>H4</div>
                        <div className="draft-toolbar-button" onClick={() => this.onClick("block", "header-five")}>H5</div>
                        <div className="draft-toolbar-button" onClick={() => this.onClick("block", "header-six")}>H6</div>
                        <div className="draft-toolbar-button" onClick={() => this.onClick("block", "p")}>P</div>
                    </div>
                    <div className="draft-toolbar-group">
                        <div className="draft-toolbar-button" onClick={() => this.onClick("block", "blockquote")}><Quote /></div>
                        <div className="draft-toolbar-button" onClick={() => this.onClick("code")}><Code /></div>
                        <div className="draft-toolbar-button"><Hyperlink /></div>
                    </div>
                    <div className="draft-toolbar-group">
                        <div className="draft-toolbar-button"><AlignLeft /></div>
                        <div className="draft-toolbar-button"><AlignCenter /></div>
                        <div className="draft-toolbar-button"><AlignRight /></div>
                        <div className="draft-toolbar-button"><AlignJustify /></div>
                    </div>
                    <div className="draft-toolbar-group">
                        <div className="draft-toolbar-button" onClick={() => this.onClick("block", "unordered-list-item")}><DotList /></div>
                        <div className="draft-toolbar-button" onClick={() => this.onClick("block", "ordered-list-item")}><NumberList /></div>
                        <div className="draft-toolbar-button"><IndentLeft /></div>
                        <div className="draft-toolbar-button"><IndentRight /></div>
                    </div>
                    <div className="draft-toolbar-group">
                        <div className="draft-toolbar-button"><Undo /></div>
                        <div className="draft-toolbar-button"><Redo /></div>
                    </div>
                </div>
                <div className="draft-editor">
                    <Editor
                        editorState={this.state.editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                        onTab={this.onTab}
                        placeholder="L'article du siècle n'attend que toi !" />
                </div>
            </div>
        );
    }
}
