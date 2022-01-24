import React from 'react';
import './App.css';
import Pokedex from './pokedex'
import Pokemon from './Pokemon';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <section >
        <Pokedex pokemons={pokemons}/>
      </section>
    )}
}

export default App;
