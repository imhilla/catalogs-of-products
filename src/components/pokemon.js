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
              <img src={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`} alt=""></img>
              <h2>{item.name}</h2>
              <p>#{item.id}</p>
              {
                item.types.map(type => (
                  <li>{type['type']['name']}</li>
                ))
              }
            </div>
          </div>
        ))
        }
      </div>

    );
  }
}
export default Pokemon;
