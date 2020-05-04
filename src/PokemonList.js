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
        pokemonCount: 0
      };
    
      async componentDidMount() {
        // wait for the request to finish
        const searchParams = new URLSearchParams(window.location.search);
        const query = searchParams.get('search');
  
        this.setState( {searchQuery: query});
        




        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${this.state.typeQuery}&page=${this.state.page}`)    

        console.log(data);
        // this.setState({ pokemonData: data.body.results })
        // this.setState({pokemonCount: data.body.count})
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
      const tester = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${this.state.typeQuery}&page=${this.state.page}`)
      const updatedCount = tester.body.count
      const results = tester.body.results;

      this.setState({pokemonCount: updatedCount}, { pokemonData: results});
      
    }

    nextPageClick = async () => {
        const nextPageNumber = this.state.page + 1;
        this.setState({page: nextPageNumber});
        
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${this.state.typeQuery}&page=${this.state.page}`)
        response.body.page = this.state.page;
        this.setState({pokemonData: response.body.results})



    }
    render() {
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
            {this.state.pokemonCount > 20 && <button onClick={this.nextPageClick}>Next</button>}
        </div>
        )
    }
}

