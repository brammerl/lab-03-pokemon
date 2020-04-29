import React, { Component } from 'react'
import PokemonCard from './PokemonCard.js';
export default class PokemonList extends Component {
    render() {
        return (
            <div>
            {
                this.props.array.map(pokemon => {
                    return <PokemonCard pokemon={pokemon}/>
                })  
            }
            </div>
        )
    }
}

