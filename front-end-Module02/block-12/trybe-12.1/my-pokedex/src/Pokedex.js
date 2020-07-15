import React from 'react';
import Pokemon from './Pokemon.js';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className='tela'>
        <Pokemon key={pokemons.id} pokemon={pokemons}/>
      </div>
    )
  }
}

export default Pokedex;