import React from 'react';
import ReactDOM  from 'react-dom';
import {Editor, EditorState} from 'draft-js';

if (typeof window !== 'undefined') {
    window.React = React;
}

class Entry extends React.Component {
	constructor(props){
		super(props);
	    this.state = {editorState: EditorState.createEmpty()};
    	this.onChange = (editorState) => this.setState({editorState});
    	this.focus = () => this.refs.editor.focus()
	}
	render(){
  		    const {editorState} = this.state;
    		return <div onClick={this.focus}> <Editor editorState={editorState} onChange={this.onChange} ref="editor" /></div>;
	}
}

ReactDOM.render(<Entry />, document.getElementById('app'));
