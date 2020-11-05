import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     render: false,
  //   };
  //   this.isMounted = false;
  // }

  // componentDidMount() {
  // }

  componentWillUnmount() {
    this.isMounted = false;
  }

  render() {
    const { data } = this.props;
    const ourData = data.products;
    const category = data.filter;
    let myNewData = [];
    ourData.map(item => {
      item.types.map(type => {
        if (type.type.name === category) {
          myNewData.push(item);
        } else if (category === 'All' || category === 'CATEGORIES') {
          myNewData = ourData;
        }
        return null;
      });
      return null;
    });

    const PokemonList = ourData.length === 50 ? (
      <div className="pokeContainer">
        {myNewData.map(item => (
          <div className="container-div" key={uuidv4()}>
            <h2 className="item-name">{item.name}</h2>
            <div className="img-container">
              <Link to={`/pokemon/${item.id}`}>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`} alt="" />
              </Link>
            </div>
            {
              item.types.map(type => (
                <div key={uuidv4()}>
                  <li>{type.type.name}</li>
                </div>
              ))
            }
          </div>
        ))}
      </div>
    ) : (<div>No pokemons yet, check your internet</div>);

    return (
      <div className="pokelist">
        {PokemonList}
      </div>
    );
  }
}

Pokemon.propTypes = {
  products: PropTypes.objectOf(PropTypes.string),
  data: PropTypes.objectOf(PropTypes.any),
  length: PropTypes.number,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

Pokemon.defaultProps = {
  products: {},
  length: 50,
  data: {},
};

export default Pokemon;
