import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import About from './About';
import PokemonDetails from './PokemonDetails';
import NotFound from './NotFound';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" render={(props ) => <Pokedex 
            {...props} 
            pokemons={pokemons} /> } 
            />
            <Route path="/pokemon/:pokeId" render={(props ) => <PokemonDetails 
            {...props} 
            pokemons={ pokemons } /> } />
            <Route path="/about" component={ About } />
            <Route component= { NotFound } />
          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;