import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';
import Selector from './Select.js';
import PokemonProfile from './PokemonProfile.js'
import PokemonCard from './PokemonCard.js'


const testObj = {
  "_id": "5cef3501ef6005a77cd4fd16",
  "pokemon": "venusaur",
  "id": 3,
  "species_id": 3,
  "height": 20,
  "weight": 1000,
  "base_experience": 236,
  "type_1": "grass",
  "type_2": "poison",
  "attack": 82,
  "defense": 83,
  "hp": 80,
  "special_attack": 100,
  "special_defense": 100,
  "speed": 80,
  "ability_1": "overgrow",
  "ability_2": "NA",
  "ability_hidden": "chlorophyll",
  "color_1": "#78C850",
  "color_2": "#A040A0",
  "color_f": "#81A763",
  "egg_group_1": "monster",
  "egg_group_2": "plant",
  "url_image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
  "generation_id": 1,
  "evolves_from_species_id": "2",
  "evolution_chain_id": 1,
  "shape_id": 8,
  "shape": "quadruped",
  "pokebase": "venusaur",
  "pokedex": "http://www.pokemon.com/us/pokedex/venusaur"
  }

it('renders search bar', () => {
  const wrapper = shallow(<Selector />);

  expect(wrapper).toMatchSnapshot();
});

it ('renders the pokemon profile', () => {
  const wrapper = shallow(<PokemonProfile pokemon={testObj}/>)

  expect(wrapper).toMatchSnapshot();
})

it ('renders header', () => {
  const wrapper = shallow(<Header/>)

  expect(wrapper).toMatchSnapshot();
})

it ('renders pokemon general card', () => {
  const wrapper = shallow(<PokemonCard pokemon={testObj}/>)

  expect(wrapper).toMatchSnapshot();
})

