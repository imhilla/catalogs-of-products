import React from "react";
import axios from 'axios';
import Random from './Random'

class PokemonView extends React.Component {
  state = {
    id: null,
    random: [],
  }

  componentDidMount() {
    let id = this.props.match.params.pokemon_id
    const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    let empty = []
    let four = [1, 2, 3, 4]
    four.map(item => {
      let number = randomInteger(0, 50)
      empty.push(number)
      this.setState({ random: empty })
    })

    let pokeData = axios(
      'https://pokeapi.co/api/v2/pokemon?limit=50',
    ).then(res => { this.setState({ data: res.data.results }) });
    this.setState({
      id: id
    })
  }

  render() {
    const singlePoke = this.state.data !== undefined && this.state.random.length !== undefined ? (
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
      <div className="poke-container">
        {/* {singlePoke} */}
        <div>
          <Random data={this.state.data} />
        </div>
        <div><h2>Descrption</h2></div>
      </div>
    );
  }
};

export default PokemonView;
