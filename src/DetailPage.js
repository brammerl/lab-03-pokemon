import React, { Component } from 'react';
import request from 'superagent';
import PokemonProfile from './PokemonProfile.js'
import Header from './Header.js';



export default class DetailPage extends Component {
    state = {
        pokemonInfo: []
    }

    async componentDidMount() {
        const data = await request.get( `https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params.pokemon}`)
        this.setState({pokemonInfo: data.body})
    }
    render() {
        return (
            
            <div>
                <Header />
                {
                this.state.pokemonInfo 
                ? <PokemonProfile name={this.state.pokemonInfo}/>
                : <h1>Loading</h1> 
                } 
            </div>
        )
    }
}
