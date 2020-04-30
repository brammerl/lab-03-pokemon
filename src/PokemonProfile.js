import React, { Component } from 'react'

export default class PokemonProfile extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name.pokemon}</h1>
                <img src={this.props.name.url_image} alt='Look! A cute pokemon!'/>
                <ul> Basic Information
                    <li>Generation: {this.props.name.generation_id}</li>
                    <li>Primary Type: {this.props.name.type_1}</li>
                    <li>Height: {this.props.name.height} meters</li>
                    <li>Weight: {this.props.name.weight} kg</li>
                    <li>Base XP: {this.props.name.base_experience}</li>
                    <li>HP: {this.props.name.hp}</li>
                </ul>
                <a href={this.props.name.pokedex}>More Info</a>
            </div>
        )
    }
}
