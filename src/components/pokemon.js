import React from 'react';
class Pokemon extends React.Component {
  render() {
    let ourData = this.props.data.products
    console.log(ourData)
    return (
      <div className="pokeContainer">
      <h2>hhcxc</h2>
        { Object.entries(ourData).forEach(([key, value]) => (
          <div>
            <div>
              <h2>{value.name}</h2>
              <h2>{value.id}</h2>
              <h1>Hello wwwww</h1>
              {console.log(value.id)}
            </div>
          </div>
        ))
        }
      </div>

    );
  }
}


export default Pokemon
