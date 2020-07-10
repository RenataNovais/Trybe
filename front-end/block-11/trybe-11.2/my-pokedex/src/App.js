import React from 'react';
import './App.css';
import data from './data';
import Pokedex from './Pokedex.js';

function App() {
  return (
    <div>
      <h1 className='title'>Pokedex da Rere</h1>
      <Pokedex pokemons={data}/>
      <footer className='foot'>
        By {' '}
        <a className='links' href='https://www.linkedin.com/in/renata-novais-de-castro-santos-b381b4116/'>
          Renata Novais
        </a>
      </footer>
    </div>
  );
}

export default App;

/*
data  --> Pokedex
  this.props 

 */
