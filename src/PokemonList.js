import React, { Component } from 'react'
import PokemonCard from './PokemonCard.js';
import Select from './Select.js';
import request from 'superagent';
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
        const typeQuery = searchParams.get('type');
        if (query) {
            let page = 1;
            if( searchParams.get('page')) {
                page = searchParams.get('page');
            }
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${query}&page=${page}`)   
            const pokemon = data.body.results;
            this.setState({pokemonData: pokemon, page: page})
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
        console.log(this.state);
        return (
        <div>
            <Select selectFxn={this.typeChange} 
            inputFxn={this.handleChange} 
            clickFxn={this.handleClick}/>
            <ul id='mainList'>
            {
                this.state.pokemonData.map(pokemon => {
                    return <PokemonCard pokemon={pokemon}/>
                })  
            }
            </ul>
            {this.state.page >= 2 && <button onClick={this.lastPageClick}>Previous</button>}
            {this.state.pokemonData && <button onClick={this.nextPageClick} id='next'>Next</button>}
            
        </div>
        )
    }
}

