import React, { Component } from 'react'
import request from 'superagent';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';

import PokemonCard from './PokemonCard';
import Selector from './Select.js';
import NameSearch from './NameSearch.js'


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
                    <Selector selectFxn={this.typeChange}/>
                </div>
                    <NameSearch fxn={this.handleChange}/>
                    <br/>
                    <Button id='search' variant="contained" onClick={this.handleClick}>Search</Button>
            </section>

            <section id='pokemonList'>
                <GridList cellHeight={160} spacing='4'>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto'}}>
                    <ListSubheader component="div">Pokemon</ListSubheader>
                </GridListTile>
                    {
                    this.state.pokemonData.map((pokemon) => {
                        return <PokemonCard pokemon={pokemon}/>
                    })
                    }
                </GridList>
            </section>
            <section>
            {this.state.page >= 2 && <button onClick={this.lastPageClick}>Previous</button>}
            {this.state.pokemonData && <button onClick={this.nextPageClick} id='next'>Next</button>}
            </section>
        </div>
        )
    }
}

