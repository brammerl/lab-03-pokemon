import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info';
export default class PokemonCard extends Component {
    render() {
        const pokemon = this.props.pokemon
        return (
           
            <GridListTile style={{height: 160, width: 160}}>
                <img src={this.props.pokemon.url_image} alt='look at that cute pokemon'/>
            <GridListTileBar
                title={pokemon.pokemon}
                subtitle={pokemon.type_1}
                actionIcon={
                    <IconButton>
                    <Link to={`/pokemon/${pokemon._id}`}>
                      <InfoIcon />
                      </Link>
                    </IconButton>
                }
            />
        </GridListTile>
            
        )
    }
}
