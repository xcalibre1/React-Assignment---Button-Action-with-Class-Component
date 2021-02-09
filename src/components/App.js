import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
	super(props);
	    this.state={
	    text:"",
  };
}
    handlePara=()=>{
    this.setState({text:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"});
    }
    render() {
    	return (
    		<div id="main">
				{ /* Do not remove this main div!! */ }
		<p id="para">{this.state.text}</p>
		<button id="click" onClick={this.handlePara}>button</button>
    		</div>
    	);
    }
}


export default App;
