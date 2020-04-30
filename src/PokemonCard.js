import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class PokemonCard extends Component {
    render() {
        const pokemon = this.props.pokemon
        return (
           
            <li className='box'>
                <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon}/>
                <Link to={`/pokemon/${pokemon._id}`}>
                    <h1>{pokemon.pokemon}</h1>
                </Link>
                <ul>
                    <li>Type: {this.props.pokemon.type_1} {this.props.pokemon.type_2}</li>
                    <li>Attack: {this.props.pokemon.attack}</li>
                    <li>Defense: {this.props.pokemon.defense}</li>
                </ul>
            </li>
            
        )
    }
}
