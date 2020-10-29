import React from 'react';

class Pokemon extends React.Component {
  render() {
    let ourData = this.props.data.products
    console.log(ourData)
    console.log(ourData)
    return (
      <div className="pokeContainer">
        { ourData.map(item => (
          <div className="container-div">
            <div className="img-container">
              <img src={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`} alt=""></img>
            </div>
            <h2>{item.name}</h2>
            <p>#{item.id}</p>
            {
              item.types.map(type => (
                <li>{type['type']['name']}</li>
              ))
            }
          </div>
        ))
        }
      </div>
    );
  }
}
export default Pokemon;
