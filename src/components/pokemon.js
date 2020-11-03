import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
// import PokemonView from './PokemonView'

const Pokemon = (props) => {
  const [data, setData] = useState({ pokemons: "empty" });

  useEffect(() => {
    setTimeout(() => {
      setData({ pokemon: props.data.products })
    }, 3000)
  });

  let ourData = props.data.products
  let category = props.filter
  let myNewData = [];
  ourData.map((item) => {
    item.types.map((type) => {
      if (type['type']['name'] === category) {
        myNewData.push(item)
      } else if (category === 'All' || category === 'CATEGORIES') {
        myNewData = ourData
      }
    })
  })
  return (
    <div className="pokeContainer">
      { myNewData.map(item => (
        <div className="container-div">
          <div className="img-container">
            <Link to={`/pokemon/${item.id}`}>
              <img src={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`} alt=""></img>
            </Link>
          </div>
          <h2 className="item-name">{item.name}</h2>
          <p>#{item.id}</p>
          {
            item.types.map(type => (
              <li>{type['type']['name']}</li>
            ))
          }
        </div>
      ))
      }
    </div>
  );
}
export default Pokemon;
