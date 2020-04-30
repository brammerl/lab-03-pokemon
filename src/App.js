
import './App.css';
import React, { Component } from 'react'
import request from 'superagent';
import PokemonList from './PokemonList'
import Select from './Select.js'
import Header from './Header.js'
import Data from './Data.js'

export default class App extends Component {

  state = {
    searchQuery: null,
    searchParam: null,
    pokemonData: Data
  };

handleChange = (event) => {
    const eventVal = event.target.value;

    this.setState({searchQuery: eventVal});

};

handleChange2 = (e) => {
  const eventVal2 = e.target.value;
  console.log(eventVal2);
  this.setState({searchParam: eventVal2})

};

handleClick = async() => {
  const tester = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.searchParam}=${this.state.searchQuery}`)
    console.log(tester.body.results)
    const results = tester.body.results;
    this.setState({ pokemonData: results});
    console.log(this.state.data);
}

render() {
    return (
      <div>
        <Header/>
        <Select fxn={this.handleChange2}/>
        <input onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Search</button>
        <PokemonList array={this.state.pokemonData}/>
      </div>
    )
  }
}

