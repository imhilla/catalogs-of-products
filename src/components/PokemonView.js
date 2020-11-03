import React from 'react';

class PokemonView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: props.match.params.id,
    };
  }
  // componentDidMount() {
  //   console.log(this.props)
  //   // const { fetchOneMission } = this.props;
  //   // const { ID } = this.state;
  //   // fetchOneMission(ID);
  // }

  render() {
    return (
      <div className="Question">
        <p>i am here</p>
      </div>
    )
  }
}
// const PokemonView = ({ match }) => {
//   let id = match.params;
//   console.log('here')
//   return (

//   )
// };

export default PokemonView;
