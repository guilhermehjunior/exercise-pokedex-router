import React from 'react';

class PokemonDetails extends React.Component {
  render(){
    const { name, type, averageWeight, image, foundAt } = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
        <div className="maps">
          { foundAt.map((map) => {
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

export default PokemonDetails;