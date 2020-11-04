import React from "react";
import axios from 'axios';

class PokemonView extends React.Component {
  state = {
    id: null
  }
  componentDidMount() {
    let id = this.props.match.params.pokemon_id
    let data
    let pokeData = axios(
      'https://pokeapi.co/api/v2/pokemon?limit=50',
    ).then(res => { this.setState({ data: res.data.results }) });
    this.setState({
      id: id
    })
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <div>{this.state.id}</div>
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`} alt="" />
      </div>
    );
  }
};

export default PokemonView;
