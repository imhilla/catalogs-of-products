import React from "react";
import axios from 'axios';

class PokemonView extends React.Component {
  state = {
    id: null
  }
  componentDidMount() {
    let id = this.props.match.params.pokemon_id
    let pokeData = axios(
      'https://pokeapi.co/api/v2/pokemon?limit=50',
    ).then(res => { this.setState({ data: res.data.results }) });
    this.setState({
      id: id
    })
  }

  render() {
    const singlePoke = this.state.data !== undefined ? (
      <div>
        {this.state.data.map(item => {
          if (item.url === `https://pokeapi.co/api/v2/pokemon/${this.state.id}/`) {
            return (<h2>My name is {item.name}</h2>)
          }
        })
        }
        <div className="single-img">
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`} alt="" />
        </div>
      </div>) : (
        <div>Loading...</div>);

    return (
      <div>
        {singlePoke}
      </div>
    );
  }
};

export default PokemonView;
