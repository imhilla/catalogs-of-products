/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';
import Random from './Random';
import NewProducts from './NewProducts';
import './pokemonView.css';

class PokemonView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      random: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const id = params.pokemon_id;
    const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const empty = [];
    const four = [1, 2, 3, 4];
    four.forEach(() => {
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
    const { data } = this.state;
    const { random } = this.state;
    const { id } = this.state;
    const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const singlePoke = data !== undefined && random.length !== undefined ? (
      <div>
        <div className="single-img">
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="" />
        </div>

      </div>
    ) : (<div>Loading...</div>);
    const Description = data !== undefined && random.length !== undefined ? (
      <div>
        {data.map(item => {
          if (item.url === `https://pokeapi.co/api/v2/pokemon/${id}/`) {
            return (
              <div key={`${item}view`}>
                <div className="description">
                  <h2>{item.name}</h2>
                  <p>
                    You`&apos;`ll get Pikachu wearing some of Ash`&apos;`s caps from throughout
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
                      <button type="button">ADD TO CART</button>
                    </div>
                  </div>
                  <div className="lastContainer">
                    <p>
                      You do not need to have purchased the Pokémon Sword Expansion Pass or
                      Pokémon Shield Expansion Pass to claim any of these forms of Ash`&apos;`s
                      Pikachu,
                      and you can receive each of these forms only once in a single save file.
                      Also, please note that Ash`&apos;`s Pikachu cannot evolve. Likewise,
                      Ash`&apos;`s Pikachu cannot be fed Max Soup, which is featured in
                    </p>
                  </div>
                </div>
                <div />
              </div>
            );
          }
        })}
      </div>
    ) : (<div />);

    return (
      <div className="allContainer">
        <div className="poke-container">
          {singlePoke}
          <div>
            <Random data={data} />
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

PokemonView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      pokemon_id: PropTypes.node,
    }),
  }),
};

PokemonView.defaultProps = {
  match: {},
};

export default PokemonView;
