import React from 'react';
import PropTypes from 'prop-types';

class PokemonDetails extends React.Component {
  render(){
    const { pokemons } = this.props;
    const { match: {params : { pokeId } } } = this.props;
    const pokemon = pokemons.find((poke) => poke.id === Number(pokeId));
    return (
      <div className="pokemonInfo">
        <h2>{ `${pokemon.name} Info!`}</h2>
        <div className="pokemon">
          <div>
            <p>{ pokemon.name }</p>
            <p>{ pokemon.type }</p>
            <p>
              Average weight: { `${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}` }
            </p>
          </div>
        <img src={ pokemon.image } alt={ `${ pokemon.name } sprite` } />
        </div>
        <h3>Summary</h3>
        <p>{ pokemon.summary }</p>
        <div className="maps">
          { pokemon.foundAt.map((map) => {
            return (
              <div key={ map.location }>
                <h5>{ map.location }</h5>
                <img src={ map.map } alt={`${ map.location } map`} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

PokemonDetails.propTypes = {
  pokemons: PropTypes.array,
}

export default PokemonDetails;