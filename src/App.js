
import './App.css';

import React, { Component } from 'react'
import request from 'superagent';
export default class App extends Component {

  state = {
    searchQuery: null,
    data: '',
  };

  handleChange = (event) => {
    const eventVal = event.target.value;

    this.setState({searchQuery: eventVal});
};

handleClick = async() => {
  const tester = await request.get(this.state.seachQuery)
    console.log(tester)
    this.setState({ data: 'hello'});
    console.log(this.state.data);
}

render() {
    return (
      <div>
        <input onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Search</button>
      </div>
    )
  }
}

