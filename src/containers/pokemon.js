import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import './pokemon.css';

const Pokemon = props => {
  const [, rerender] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => rerender(null), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  const { data } = props;
  const ourData = data.products;
  const category = data.filter;
  let myNewData = [];
  ourData.forEach(item => {
    item.types.forEach(type => {
      if (type.type.name === category) {
        myNewData.push(item);
      } else if (category === 'All' || category === 'CATEGORIES') {
        myNewData = ourData;
      }
    });
  });

  const PokemonList = ourData.length === 50 ? (
    <div className="pokeContainer">
      {myNewData.map(item => (
        <div className="container-div" key={uuidv4()}>
          <h2 className="item-name">{item.name}</h2>
          <div className="img-container">
            <Link to={`/pokemon/${item.id}`}>
              <img src={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`} alt="" />
            </Link>
          </div>
          {
            item.types.map(type => (
              <div key={uuidv4()}>
                <li>{type.type.name}</li>
              </div>
            ))
          }
        </div>
      ))}
    </div>
  ) : (<div className="internet">No pokemons yet, check your internet</div>);

  return (
    <div className="pokelist">
      {PokemonList}
    </div>
  );
};

Pokemon.propTypes = {
  products: PropTypes.instanceOf(Array),
  data: PropTypes.objectOf(PropTypes.any),
  length: PropTypes.number,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }),
  }),
};

Pokemon.defaultProps = {
  products: [],
  length: 50,
  data: {},
  match: {},
};

export default Pokemon;
