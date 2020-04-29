import React, { Component } from 'react'
import PokemonCard from './PokemonCard.js';
export default class PokemonList extends Component {
    render() {
        return (
            <div>
                this.prop.data.filter(pokemon => {
                    return <PokemonCard ind={pokemon}/>
                })  
            </div>
        )
    }
}

