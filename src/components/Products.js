import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux'
import Pokemon from './pokemon';


const Products = ({ products }) => {
  const [data, setData] = useState({ products });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/pokemon?limit=100',
      );
      // let productArray = products.products;
      // console.log(productArray.push(result.data.results))
      setData(result.data);
    };

    fetchData();
  }, [products.products]);

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
                  productArr.push(pokeData)
                })
            })
          }
        })
        let myPokeData = store.getState();
        let newPoke = myPokeData.products;
        // do something useful with the store, like passing it to a child
        // component where it can be used in lifecycle methods
        return <div>
          <Pokemon data={newPoke} />
        </div>
      }}
    </ReactReduxContext.Consumer>
  )
}

const mapStateToProps = state => ({
  products: state.products,
});

// const mapDispatchToProps = dispatch => ({
//   changeFilter: category => dispatch(changeFilter(category)),
// });


export default connect(mapStateToProps)(Products);
