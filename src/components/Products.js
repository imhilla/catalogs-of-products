import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';



const Products = ({ products }) => {
  const [data, setData] = useState({ products });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/pokemon?limit=151',
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <h4>{console.log(typeof data)}</h4> */}
      {
        Object.entries(data).forEach(([key, value]) => {
          if (key === 'results') {
            console.log(key, value);
          }
        })
      }
    </div>
  )
}

function fetchPokemonData(pokemon) {
  let url = pokemon.url
  fetch(url)
    .then(response => response.json())
    .then(function (pokeData) {
      renderPokemon(pokeData)
    })
}


function renderPokemon(pokeData) {
  return (
    <div className="pokeContainer">
      <div className="pokeName">
        <h4>
          {pokeData.name}
        </h4>
        <p className="pokeNumber">{pokeData.id}</p>
        <ul className="pokeTypes">
          {createTypes(pokeData.types)}
        </ul>
      </div>
    </div>
  )
}

function createTypes(types) {
  types.forEach(function (type) {
    <li>{type['type']['name']}</li>
  })
}

const mapStateToProps = state => ({
  products: state.products,
});

// const mapDispatchToProps = dispatch => ({
//   changeFilter: category => dispatch(changeFilter(category)),
// });


export default connect(mapStateToProps)(Products);
