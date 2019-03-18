import React, { Component, ReactComponent } from 'react';
import { convertToRaw, convertFromRaw, Editor, EditorState, Modifier, RichUtils } from 'draft-js';
import './Draft.css';
import './../../node_modules/draft-js/dist/Draft.css';

import { ReactComponent as Bold } from './icon/bold-icon.svg';
import { ReactComponent as Italicize } from './icon/italicize-icon.svg';
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

        this.onChange = (editorState) => this.setState({ editorState });
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.onTab = e => this._onTab(e);
    }

    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    _onTab(e) {
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    }

    _onBoldClick() { this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD')); }
    _onItalicClick() { this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC')); }
    _onUnderlineClick() { this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE')); }
    _onStrikeClick() { this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH')); }

    _onHeaderOneClick() { this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-one')); }
    _onHeaderTwoClick() { this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-two')); }
    _onHeaderThreeClick() { this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-three')); }
    _onHeaderFourClick() { this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-four')); }
    _onHeaderFiveClick() { this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-five')); }
    _onHeaderSixClick() { this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-six')); }
    _onPPClick() { this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'p')); }

    _onQuoteClick() { this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'blockquote')); }
    _onCodeClick() { this.onChange(RichUtils.toggleCode(this.state.editorState)); }

    _onLeftAlignClick() { this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'leftAlign')); }
    _onCenterAlignClick() { this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'centerAlign')); }
    _onRightAlignClick() { this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'rightAlign')); }

    _onUnorderedListClick() { this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'unordered-list-item')); }
    _onOrderedListClick() { this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'ordered-list-item')); }
    _onIndentLeftListClick() { this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'ordered-list-item')); }
    _onIndentRightListClick() { this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'ordered-list-item')); }

    render() {
        return (
            <div className="draft">
                <div className="draft-toolbar">
                    <div className="draft-toolbar-group">
                        <div className="draft-toolbar-button" onClick={this._onBoldClick.bind(this)}><Bold /></div>
                        <div className="draft-toolbar-button" onClick={this._onItalicClick.bind(this)}><Italicize /></div>
                        <div className="draft-toolbar-button" onClick={this._onUnderlineClick.bind(this)}><Underline /></div>
                        <div className="draft-toolbar-button" onClick={this._onStrikeClick.bind(this)}><Strikethrough /></div>
                    </div>
                    <div className="draft-toolbar-group">
                        <div className="draft-toolbar-button" onClick={this._onHeaderOneClick.bind(this)}>H1</div>
                        <div className="draft-toolbar-button" onClick={this._onHeaderTwoClick.bind(this)}>H2</div>
                        <div className="draft-toolbar-button" onClick={this._onHeaderThreeClick.bind(this)}>H3</div>
                        <div className="draft-toolbar-button" onClick={this._onHeaderFourClick.bind(this)}>H4</div>
                        <div className="draft-toolbar-button" onClick={this._onHeaderFiveClick.bind(this)}>H5</div>
                        <div className="draft-toolbar-button" onClick={this._onHeaderSixClick.bind(this)}>H6</div>
                        <div className="draft-toolbar-button" onClick={this._onPPClick.bind(this)}>P</div>
                    </div>
                    <div className="draft-toolbar-group">
                        <div className="draft-toolbar-button" onClick={this._onQuoteClick.bind(this)}><Quote /></div>
                        <div className="draft-toolbar-button" onClick={this._onCodeClick.bind(this)}><Code /></div>
                        <div className="draft-toolbar-button"><Hyperlink /></div>
                    </div>
                    <div className="draft-toolbar-group">
                        <div className="draft-toolbar-button" onClick={this._onLeftAlignClick.bind(this)}><AlignLeft /></div>
                        <div className="draft-toolbar-button" onClick={this._onCenterAlignClick.bind(this)}><AlignCenter /></div>
                        <div className="draft-toolbar-button" onClick={this._onRightAlignClick.bind(this)}><AlignRight /></div>
                        <div className="draft-toolbar-button"><AlignJustify /></div>
                    </div>
                    <div className="draft-toolbar-group">
                        <div className="draft-toolbar-button" onClick={this._onUnorderedListClick.bind(this)}><DotList /></div>
                        <div className="draft-toolbar-button" onClick={this._onOrderedListClick.bind(this)}><NumberList /></div>
                        <div className="draft-toolbar-button" onClick={this.onTab}><IndentLeft /></div>
                        <div className="draft-toolbar-button" onClick={this.onTab}><IndentRight /></div>
                    </div>
                    <div className="draft-toolbar-group">
                        <div className="draft-toolbar-button"><Undo /></div>
                        <div className="draft-toolbar-button"><Redo /></div>
                    </div>
                    <div className="draft-toolbar-group">
                        <div className="draft-toolbar-button" onClick={this._save}>Save</div>
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
