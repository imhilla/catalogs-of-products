import React from 'react';
import { Link, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false,
    };
    this.isMounted = false;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ render: true });
    }, 3000);
    this.isMounted = true;
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  render() {
    const ourData = this.props.data.products;
    const category = this.props.filter;
    let myNewData = [];
    ourData.map(item => {
      item.types.map(type => {
        if (type.type.name === category) {
          myNewData.push(item);
        } else if (category === 'All' || category === 'CATEGORIES') {
          myNewData = ourData;
        }
      });
    });

    const PokemonList = ourData.length === 50 ? (
      <div className="pokeContainer">
        {myNewData.map((item, index) => (
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
    ) : (
        <div>No pokemons yet, check your internet</div>
      );

    const renderContainer = false; // By default don't render anything
    if (this.state.render) { // If this.state.render == true, which is set to true by the timer.
      console.log('wait');
    }

    return (
      <div className="pokelist">
        {PokemonList}
      </div>
    );
  }
}

Pokemon.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default Pokemon;
