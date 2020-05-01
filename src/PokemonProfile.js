import React, { Component } from 'react'

export default class PokemonProfile extends Component {
    render() {
        return (
            <div>
                <h1 id='pokemonName'>{this.props.name.pokemon}</h1>
                    <section id='pokemonBox'>
                        <img src={this.props.name.url_image} alt='Look! A cute pokemon!' id='profileImg'/>
                        <section id='information'>
                            <ul id='basicInfo'> 
                                <li><h2>Basic Information</h2></li>
                                <li>Generation: {this.props.name.generation_id}</li>
                                <li>Primary Type: {this.props.name.type_1}</li>
                                <li>Height: {this.props.name.height} meters</li>
                                <li>Weight: {this.props.name.weight} kg</li>
                                <li>Base XP: {this.props.name.base_experience}</li>
                                <li>HP: {this.props.name.hp}</li>
                                <li><a href={this.props.name.pokedex}>More Info</a></li>
                            </ul>
                            
                    </section>
                </section>
            </div>
        )
    }
}
