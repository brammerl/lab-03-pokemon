import React, { Component } from 'react'

export default class PokemonCard extends Component {
    render() {
        return (
           
            <li>
                <h1>{this.props.pokemon.id}</h1>
            </li>
            
        )
    }
}
