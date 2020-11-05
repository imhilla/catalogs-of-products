import React, { useState, useEffect } from 'react';
import { connect, ReactReduxContext } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import Pokemon from './pokemon';
import CategoryFilter from '../components/categoryFilter';
import { changeFilter } from '../actions/index';

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
        const nowState = store.getState();
        const productArr = nowState.products.products;
        Object.entries(data).forEach(([key, value]) => {
          if (key === 'results') {
            Object.entries(value).forEach(([, value]) => {
              const { url } = value;
              fetch(url)
                .then(response => response.json())
                .then(pokeData => {
                  if (productArr.length < 50) {
                    productArr.push(pokeData);
                  }
                });
            });
          }
        });
        const myPokeData = store.getState();
        const newPoke = myPokeData.products;
        return (
          <div>
            <div className="LowerNav">
              <CategoryFilter
                filter={category}
                handleFilterChange={handleFilterChange}
              />
            </div>

            <Pokemon data={newPoke} filter={category} key={uuidv4()} />
          </div>
        );
      }}
    </ReactReduxContext.Consumer>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any),
  changeFilter: PropTypes.func,
  category: PropTypes.string,
};

Products.defaultProps = {
  products: [],
  changeFilter: () => { },
  category: 'All',
};

const mapStateToProps = state => ({
  products: state.products,
  category: state.products.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
