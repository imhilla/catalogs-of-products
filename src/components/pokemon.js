import React from 'react';
import { Link, Route } from "react-router-dom";
import PokemonView from './PokemonView'
import { v4 as uuidv4 } from 'uuid';


class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: "empty" };
    this.handleClick = this.handleClick.bind(this);
    this.state = { clicked: false }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ products: this.props.data.products })
    }, 3000)
  }

  handleClick() {
    console.log('yes')
    this.setState({ clicked: true })
  }

  render() {
    const mystyles = {
      inputNormal: { display: 'none' },
      inputClicked: { color: 'grid' }
    }
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
    return (
      <div>
        <div className="pokeContainer" style={this.state.clicked ? mystyles.inputNormal : mystyles.inputClicked}
        >
          {myNewData.map((item, index) => (
            <div className="container-div" key={index}>
              <div className="img-container">
                <Link to={`/pokemon/${item.id}`} onClick={this.handleClick}>
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
          ))
          }</div>
        <Route path={`/pokemon/:pokemonId`}>
          <PokemonView data={myNewData} key={uuidv4()} />
        </Route>
      </div>
    );
  }
}
export default Pokemon;
