import React from 'react';

class Pokemon extends React.Component {
  render() {
    let ourData = this.props.data.products
    // console.log(ourData)
    // console.log(ourData.id)
    return (
      <div className="pokeContainer">
        { ourData.map(item => (
          <div>
            <div>
              <h2>{item.name}</h2>
              <h2>{item.id}</h2>
              {
                item.types.map(type => (
                  <p>{type['type']['name']}</p>
                ))
              }
              <img src={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`} alt=""></img>
            </div>
          </div>
        ))
        }
      </div>

    );
  }
}
export default Pokemon;
