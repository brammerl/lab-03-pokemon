
import './App.css';
import React, { Component } from 'react'
import PokemonList from './PokemonList'
import Header from './Header.js'


export default class SelectionPage extends Component {

render() {
    return (
      <div>
        <Header/>
        <PokemonList/>
      </div>
    )
  }
}

