import React from "react";

class PokemonView extends React.Component {
  state = {
    id: null
  }
  componentDidMount() {
    let id = this.props.match.params.pokemon_id
    this.setState({
      id: id
    })
  }

  render() {
    return (
      <div>
        {/* <div>{productData}</div> */}
        <div>{this.state.id}</div>
      </div>
    );
  }
};

export default PokemonView;
