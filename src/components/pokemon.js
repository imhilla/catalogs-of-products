import React from 'react';

class Pokemon extends React.Component {
  render() {
    let ourData = this.props.data.products
    console.log(ourData)
    return (
      <div className="pokeContainer">
      <h2>hhcxc</h2>
        { ourData.map(item => (
          <div>
            <div>
              <h2>{item.name}</h2>
              <h2>{item.id}</h2>
              <h1>Hello wwwww</h1>
              {console.log(item)}
            </div>
          </div>
        ))
        }
      </div>

    );
  }
}
export default Pokemon;
