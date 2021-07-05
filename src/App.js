import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" render={(props ) => <Pokedex 
        {...props} 
        pokemons={pokemons} /> } 
        />
        <Route path="/about" component={ About } />
      </BrowserRouter>
      
    </div>
  );
}

export default App;