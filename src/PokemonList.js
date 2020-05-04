import React, { Component } from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import PokemonCard from './PokemonCard.js';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel'
import request from 'superagent';
import TextField from '@material-ui/core/TextField';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info';

import { Link } from 'react-router-dom';




// const useStyles = makeStyles({
//     formControl: {
//       margin: '10px',
//       minwidth: 120,


//     },
//   });

//   export default function SimpleSelect() {
//     const classes = useStyles();
  
//     };
export default class PokemonList extends Component {

    state = {
        searchQuery: '',
        typeQuery: '',
        pokemonData: [],
        page: 1,
      };
    
      async componentDidMount() {
        // wait for the request to finish
        const searchParams = new URLSearchParams(window.location.search);
        const query = searchParams.get('search');
        if (query) {
            let page = 1;
            if( searchParams.get('page')) {
                page = searchParams.get('page');
            }
            if(searchParams.get('type')){
                const type = searchParams.get('type');
                const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${query}&page=${page}&type=${type}`)   
                const pokemon = data.body.results;
                this.setState({pokemonData: pokemon, page: page})
            } else {
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${query}&page=${page}`)   
            const pokemon = data.body.results;
            this.setState({pokemonData: pokemon, page: page})
            }
        } 
    }
    
    handleChange = (event) => {
        const eventVal = event.target.value;
        this.setState({searchQuery: eventVal});

    };
    
    typeChange = (e) => {
      const type = e.target.value;
      this.setState({typeQuery: type})
    };
    
    handleClick = async() => {
        if (this.state.searchQuery && this.state.typeQuery) {
            const tester = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${this.state.typeQuery}&page=${this.state.page}`)
            const results = tester.body.results;
            this.setState({pokemonData: results});
        } else if (this.state.searchQuery) {
            const tester = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&page=${this.state.page}`);
            const results = tester.body.results;
            this.setState({pokemonData: results});
        } else {
            const tester = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?type=${this.state.typeQuery}&page=${this.state.page}`)
            const results = tester.body.results;
            this.setState({pokemonData: results});
        }
    }

    nextPageClick = async () => {
        const nextPageNumber = this.state.page + 1;
        this.setState({page: nextPageNumber});
        
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${this.state.typeQuery}&page=${nextPageNumber}`)
        const results = response.body.results

        if (results){
         this.setState({pokemonData: results})
        } 
    }

    lastPageClick = async () => {
        const lastPageNumber = this.state.page - 1;
        this.setState({page: lastPageNumber});
        
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${this.state.typeQuery}&page=${lastPageNumber}`)
        response.body.page = this.state.page;
        this.setState({pokemonData: response.body.results})
    }

    render() {
        return (
        <div>
            <section id='searchArea'>
                <div className='searchBox'>
                    <FormControl className='formControl'>
                    <InputLabel id="typeLabel">Type</InputLabel>
                    <Select
                    labelId="typeSelect"
                    id="typeSelect"
                    onChange={this.typeChange}
                    >
                        <MenuItem value="">
                        <em>Pokemon Type</em>
                        </MenuItem>
                        <MenuItem value='water'>Water</MenuItem>
                        <MenuItem value='fire'>Fire</MenuItem>
                        <MenuItem value='grass'>Grass</MenuItem>
                    </Select>   
                    </FormControl>
                </div>
                    <TextField id="nameSearch" label="Pokemon Name" variant="outlined" onChange={this.handleChange}/><br/>
                    <Button variant="contained" onClick={this.handleClick}>Search</Button>
            </section>

            <section id='pokemonList'>
                <GridList cellHeight={160}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Pokemon</ListSubheader>
                </GridListTile>
                    {this.state.pokemonData.map((pokemon) => (
                    <GridListTile>
                        <img src={pokemon.url_image} alt='look at that cute pokemon'/>
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
                    ))}
                </GridList>
            </section>
        </div>
        )
    }
}

