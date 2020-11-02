import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux'
import Pokemon from './pokemon';
import CategoryFilter from './categoryFilter';
import { changeFilter } from '../actions/index';



const Products = ({ products, category, changeFilter }) => {
  const handleFilterChange = e => {
    const filter = e.target.value;
    console.log('broo')
    changeFilter(filter);
  };
  console.log(category)
  // const filtered = category === 'All' ? products : products.filter(product => product.category === category);

  // eachProduct.map(item => {
  //   if (item.type['type']['name'] === 'electric') {
  //     console.log(item)
  //   }
  //   // return 'true'
  // })
  const [data, setData] = useState({ products });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/pokemon?limit=50',
      );
      // let productArray = products.products;
      // console.log(productArray.push(result.data.results))
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
                  productArr.push(pokeData)
                })
            })
          }
        })
        let myPokeData = store.getState();
        let newPoke = myPokeData.products;
        {/* const filtered = category === 'All' ? newPoke : products.filter(product => product.category === category); */ }
        let filtered
        if (category === "grass") {
          filtered = newPoke
          console.log(filtered)
        }
        // do something useful with the store, like passing it to a child
        // component where it can be used in lifecycle methods
        return (<div>
          <CategoryFilter
            filter={category}
            handleFilterChange={handleFilterChange}
          />
          {console.log(newPoke)}
          <Pokemon data={newPoke} />
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
