import React from 'react';
import { Link, Route } from "react-router-dom";
// import PokemonView from './PokemonView'
import { v4 as uuidv4 } from 'uuid';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: "empty" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ pokemons: this.props.data.products })
    }, 2000)
  }

  render() {
    let ourData = this.props.data.products
    let category = this.props.filter
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

    const PokemonList = ourData.length === 50 ? (
      <div className="pokeContainer">
        {myNewData.map((item, index) => (
          <div className="container-div" key={index}>
            <div className="img-container">
              <Link to={`/pokemon/${item.id}`}>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`} alt="" />
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
        ))}
      </div>) : (
        <div>No pokemons yet</div>
      )

    return (
      <div>
        {PokemonList}
        <div>Loading.......</div>
      </div>
    );
  }
}
export default Pokemon;
