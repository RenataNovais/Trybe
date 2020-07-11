import React from 'react';
import Pokemon from './Pokemon.js';

class Pokedex extends React.Component {
  render() {
    const pokemons = this.props.pokemons;
    // const { pokemons } = this.props;
    return (
      <div className='tela'>
        {pokemons.map((poke, index) => <Pokemon key={index} pokebola={poke} />)}
      </div>
    )
  }
}

export default Pokedex;