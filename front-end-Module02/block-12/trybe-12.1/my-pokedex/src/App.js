import React from 'react';
import './App.css';
import data from './data';
import Pokedex from './Pokedex.js';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: data,
      pokeIndex: 0,
    };
  }

  nextPokemon = () => {
    this.setState({pokeIndex: this.state.pokeIndex + 1});
  }

  filterPokemon = (type) => {
    this.setState({
      pokemons: data.filter((poke) => poke.type === type)
    });
  }
  
  render() {
    const types = data.filter((poke) => poke.type);
    return (
      <div>
        <h1 className='title'>Pokedex da Rere</h1>
        <Pokedex pokemons={this.state.pokemons[this.state.pokeIndex % this.state.pokemons.length]}/>
        <div className="filter-button">
          {/* {types.map((type) => 
            <Button type={type} filter={this.filterPokemon}/>
          )} */}
          <Button type='Fire' filter={this.filterPokemon}/>
          <Button type='Psychic' filter={this.filterPokemon}/>
          <Button type={'Dragon'} filter={this.filterPokemon} />
          <Button type={'Poison'} filter={this.filterPokemon} />
          <Button type={'Bug'} filter={this.filterPokemon} />
          <Button type={'Electric'} filter={this.filterPokemon} />
          <Button type={'Normal'} filter={this.filterPokemon} />
        </div>
        <div className="general-button">
          <button 
            onClick={this.nextPokemon} 
            disabled={this.state.pokemons.length <= 1}
          >
            Next Pokemon
          </button>
          <button onClick={() => {
            this.setState({
              pokemons: data,
              pokeIndex: 0,
            })
          }}>All</button>
        </div>
        <footer className='foot'>
          By {' '}
          <a className='links' href='https://www.linkedin.com/in/renata-novais-de-castro-santos-b381b4116/'>
            Renata Novais
          </a>
        </footer>
      </div>
    );
  }
}

export default App;

/*
data  --> Pokedex
  this.props 

 */
