import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <Route path="/" render={(props ) => <Pokedex 
        {...props} 
        pokemons={pokemons} /> } 
        />
      </BrowserRouter>
      
    </div>
  );
}

export default App;