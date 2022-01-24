import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import pokemons from './data';


class Pokedex extends React.Component {
  render() {
    const ListaPokemons = pokemons.map((item) => {
        console.log("item: ", item);
        return (<Pokemon Pokemon={item}/>);
      });
      
    return ListaPokemons
  }
}

export default Pokedex
