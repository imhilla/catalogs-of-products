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
    const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const singlePoke = this.state.data !== undefined && this.state.random.length !== undefined ? (
      <div>
        {this.state.data.map(item => {
          if (item.url === `https://pokeapi.co/api/v2/pokemon/${this.state.id}/`) {
            {/* return (<h2>My name is {item.name}</h2>) */ }
          }
        })
        }
        <div className="single-img">
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`} alt="" />
        </div>

      </div>) : (
        <div>Loading...</div>);
    const Description = this.state.data !== undefined && this.state.random.length !== undefined ? (
      <div>
        {this.state.data.map(item => {
          if (item.url === `https://pokeapi.co/api/v2/pokemon/${this.state.id}/`) {
            return (
              <div className="description">
                <h2>{item.name}</h2>
                <p>You'll get Pikachu wearing some of Ash's caps from throughout
                the animated series, ranging from his classic chapeau from when he first
                set out on his Pokémon adventure to more recent designs—like those seen in
                 the film Pokémon the Movie</p>
                <div>
                  <p className="available">Available</p>
                  <p className="available">$ 7.00</p>
                  <div className="quantityContainer">
                    <p>Quantity: {randomInteger(0, 5)}</p>
                    <i class="fas fa-shopping-cart"></i>
                    <button>ADD TO CART</button>
                  </div>
                </div>
                <div className="lastContainer">
                  <p>
                    You do not need to have purchased the Pokémon Sword Expansion Pass or
                    Pokémon Shield Expansion Pass to claim any of these forms of Ash's Pikachu,
                    and you can receive each of these forms only once in a single save file.
                    Also, please note that Ash's Pikachu cannot evolve. Likewise,
                    Ash's Pikachu cannot be fed Max Soup, which is featured in
                    The Isle of Armor (part one of the Pokémon Sword and Pokémon Shield Expansion Pass).
                  </p>
                </div>
              </div>
            )
          }
        })
        }
        {/* <div className="single-img">
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`} alt="" />
        </div> */}

      </div>) : (
        <div></div>);

    return (
      <div className="poke-container">
        {singlePoke}
        <div>
          <Random data={this.state.data} />
        </div>
        <div>{Description}</div>
      </div>
    );
  }
};

export default PokemonView;
