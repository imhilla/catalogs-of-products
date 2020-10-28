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
      // console.log(result.data)
      setData(result.data);
    };

    fetchData();
  }, []);

  // const handleFilterChange = e => {
  //   const filter = e.target.value;
  //   changeFilter(filter);
  // };



  return (
    <div>
      <h1>{setTimeout(function () {
        data.results.forEach(function (pokemon) {
          fetchPokemonData(pokemon);
        })
      }, 4000)}</h1>
    </div>
  )
}

function fetchPokemonData(pokemon) {
  let url = pokemon.url
  fetch(url)
    .then(response => response.json())
    .then(function (pokeData) {
      console.log(pokeData)
    })
}

const mapStateToProps = state => ({
  products: state.products,
});

// const mapDispatchToProps = dispatch => ({
//   changeFilter: category => dispatch(changeFilter(category)),
// });


export default connect(mapStateToProps)(Products);
