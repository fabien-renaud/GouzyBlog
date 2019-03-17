import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import './Draft.css';

import { ReactComponent as Bold } from './bold-icon.svg';
import { ReactComponent as Italicize } from './italicize-icon.svg';
import { ReactComponent as Underline } from './underline-icon.svg';

export default class Draft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };

        this.onChange = (editorState) => this.setState({ editorState });
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }

    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    _onBoldClick() { this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD')); }
    _onItalicClick() { this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC')); }
    _onUnderlineClick() { this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE')); }

    render() {
        return (
            <div className="draft">
                <div className="draft-toolbar">
                    <ul>
                        <li className="draft-toolbar-button"onClick={this._onBoldClick.bind(this)}><Bold /></li>
                        <li className="draft-toolbar-button" onClick={this._onItalicClick.bind(this)}><Italicize /></li>
                        <li className="draft-toolbar-button" onClick={this._onUnderlineClick.bind(this)}><Underline /></li>
                        <li className="draft-toolbar-divider">|</li>
                    </ul>
                </div>
                <div className="draft-editor">
                    <Editor
                        editorState={this.state.editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange} />
                </div>
            </div>
        );
    }
}
