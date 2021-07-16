import React from 'react';
import './pokemon.css';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritos: [],
    }
  }
  render() {
    const { name, type, averageWeight, image, id } = this.props.pokemon;
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
        <Link to={`/pokemon/${id}`}>More Info</Link>
      </div>
    );
  }
}

export default Pokemon;