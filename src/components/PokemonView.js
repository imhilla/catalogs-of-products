import React from 'react';
import axios from 'axios';
import Random from './Random';
import NewProducts from './NewProducts';

class PokemonView extends React.Component {
  state = {
    id: null,
    random: [],
  }

  componentDidMount() {
    const id = this.props.match.params.pokemon_id;
    const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const empty = [];
    const four = [1, 2, 3, 4];
    four.map(item => {
      const number = randomInteger(0, 50);
      empty.push(number);
      this.setState({ random: empty });
    });

    const pokeData = axios(
      'https://pokeapi.co/api/v2/pokemon?limit=50',
    ).then(res => { this.setState({ data: res.data.results }); });
    this.setState({
      id,
    });
  }

  render() {
    const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const singlePoke = this.state.data !== undefined && this.state.random.length !== undefined ? (
      <div>
        <div className="single-img">
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`} alt="" />
        </div>

      </div>
    ) : (
      <div>Loading...</div>);
    const Description = this.state.data !== undefined && this.state.random.length !== undefined ? (
      <div>
        {this.state.data.map(item => {
          if (item.url === `https://pokeapi.co/api/v2/pokemon/${this.state.id}/`) {
            return (
              <div>
                <div className="description">
                  <h2>{item.name}</h2>
                  <p>
                    You'll get Pikachu wearing some of Ash's caps from throughout
                    the animated series, ranging from his classic chapeau from when he first
                    set out on his Pokémon adventure to more recent designs—like those seen in
                    the film Pokémon the Movie
                  </p>
                  <div>
                    <p className="available">Available</p>
                    <p className="available">
                      $
                      {randomInteger(10, 30)}
                      .00
                    </p>
                    <div className="quantityContainer">
                      <p>
                        Quantity:
                        {randomInteger(0, 5)}
                      </p>
                      <i className="fas fa-shopping-cart" />
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
                <div />
              </div>
            );
          }
        })}
      </div>
    ) : (
      <div />);

    return (
      <div className="allContainer">
        <div className="poke-container">
          {singlePoke}
          <div>
            <Random data={this.state.data} />
          </div>
          <div>{Description}</div>
        </div>
        <div className="newContainer">
          <NewProducts />
        </div>
      </div>

    );
  }
}

export default PokemonView;
