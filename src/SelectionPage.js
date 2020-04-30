
import './App.css';
import React, { Component } from 'react'
import request from 'superagent';
import PokemonList from './PokemonList'
import Select from './Select.js'
import Header from './Header.js'


export default class SelectionPage extends Component {

  state = {
    searchQuery: '',
    typeQuery: '',
    pokemonData: []
  };

  async componentDidMount() {
    // wait for the request to finish
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)    

    this.setState({ pokemonData: data.body.results })
}

handleChange = (event) => {
    const eventVal = event.target.value;
    this.setState({searchQuery: eventVal});

};

typeChange = (e) => {
  const type = e.target.value;
  this.setState({typeQuery: type})
};

handleClick = async() => {
  const tester = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${this.state.typeQuery}`)
  console.log(tester.body.results)
  const results = tester.body.results;
  this.setState({ pokemonData: results});
  console.log(this.state.data);
}

render() {
    return (
      <div>
        <Header/>
        <Select fxn={this.typeChange}/>
        <input onChange={this.handleChange} placeholder='Enter Pokemone Name'/>
        <button onClick={this.handleClick}>Search</button>
        <PokemonList array={this.state.pokemonData}/>
      </div>
    )
  }
}

