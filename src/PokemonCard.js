import React, { Component } from 'react'

export default class PokemonCard extends Component {
    render() {
        return (
           
            <li className='box'>
                <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon}/>
                <h1>{this.props.pokemon.pokemon}</h1>
                <ul>
                    <li>Type: {this.props.pokemon.type_1} {this.props.pokemon.type_2}</li>
                    <li>Attack: {this.props.pokemon.attack}</li>
                    <li>Defense: {this.props.pokemon.defense}</li>
                </ul>
            </li>
            
        )
    }
}
