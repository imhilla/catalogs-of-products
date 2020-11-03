import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux'
import Pokemon from './pokemon';
import CategoryFilter from './categoryFilter';
import { changeFilter } from '../actions/index';
import { v4 as uuidv4 } from 'uuid';

const Products = ({ products, category, changeFilter }) => {
  const handleFilterChange = e => {
    const filter = e.target.value;
    changeFilter(filter);
  };
  const [data, setData] = useState({ products });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/pokemon?limit=50',
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        let nowState = store.getState()
        let productArr = nowState.products.products
        Object.entries(data).forEach(([key, value]) => {
          if (key === 'results') {
            Object.entries(value).forEach(([key, value]) => {
              let url = value.url;
              fetch(url)
                .then(response => response.json())
                .then(function (pokeData) {
                  if (productArr.length < 50) {
                    productArr.push(pokeData)
                  }
                })
            })
          }
        })
        let myPokeData = store.getState();
        let newPoke = myPokeData.products;
        return (<div>
          <CategoryFilter
            filter={category}
            handleFilterChange={handleFilterChange}
          />
          <Pokemon data={newPoke} filter={category} key={uuidv4()} />
        </div>)
      }}
    </ReactReduxContext.Consumer>
  )
}

const mapStateToProps = state => ({
  products: state.products,
  category: state.products.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(changeFilter(category)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Products);
