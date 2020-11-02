import React from 'react'
import { connect } from 'react-redux';

class PokemonView extends React.Component {

  render() {

    // let jobDetails = this.props.location.state.trabalhoDetails

    // let title = jobDetails.title;

    // let desctription = jobDetails.descricao;

    return (

      <div>
        {/* <img src={jobDetails.img} />
        <p className="trabalho_titulo">{title}</p>
        <p className="trabalho_desc">{descricao}</p> */}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
      pokemon: state.products
  };
}

export default connect(mapStateToProps)(PokemonView);
