import React, { Component } from 'react';
import './App.css';
import logo from './logo.png'
const marked = require("marked")

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown: ""
        }
    }
    markdown_output = function(markdown) {
        const ref = this;
        ref.setState({markdown})
    }
    render() {
        const ref = this;
        let {markdown} = ref.state
        return (
            <div className="App">
                <div className="flex_wrapper">
                    <div className="markdown_input">
                        <div className="title"><img src={logo}/>Markdown.md</div>
                        <textarea type="text" value={markdown} onChange={(e)=>ref.markdown_output(e.target.value)}></textarea>
                    </div>
                    <div className="markdown_output">
                        <div className="title"><img src={logo}/>Output.md</div>
                        <div className="output" dangerouslySetInnerHTML = {{__html: marked(markdown)}}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
