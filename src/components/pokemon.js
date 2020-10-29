import React from 'react';

class Pokemon extends React.Component {
  render() {
    let ourData = this.props.data.products
    return (
      <div>
        { Object.entries(ourData).forEach(([key, value]) => {
          console.log(value)
        })
        }
        <h2>{this.props.name}!</h2>
        <h3>Child Component</h3>
        <h3>Location: {this.props.location}</h3>
      </div>

    );
  }
}


// function renderPokemon(pokeData) {
//   return (
//     <div className="pokeContainer">
//       <div className="pokeName">
//         <h4>
//           {pokeData.name}
//         </h4>
//         <p className="pokeNumber">{pokeData.id}</p>
//         <ul className="pokeTypes">
//           {createTypes(pokeData.types)}
//         </ul>
//       </div>
//     </div>
//   )
// }

// function createTypes(types) {
//   types.forEach(function (type) {
//     <li>{type['type']['name']}</li>
//   })
// }


// function createTypes(types) {
//   console.log(types)
//   types.forEach(function (type) {
//     <li>{type['type']['name']}</li>
//   })
// }

export default Pokemon;