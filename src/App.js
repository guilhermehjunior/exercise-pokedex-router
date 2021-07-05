import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1> Pokedex </h1>
        <Route path="/" render={(props ) => <Pokedex 
        {...props} 
        pokemons={pokemons} /> } 
        />
      </BrowserRouter>
      
    </div>
  );
}

export default App;