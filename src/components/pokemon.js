import React from 'react';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: "empty" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ products: this.state })
    }, 5000)
  }

  render() {
    let ourData = this.props.data.products
    let category = this.props.filter
    let myNewData = [];
    ourData.map((item) => {
      item.types.map((type) => {
        if (type['type']['name'] === category) {
          console.log(item)
          myNewData.push(item)
          console.log(category)
        } else if (category === 'All' || category === 'CATEGORIES') {
          myNewData = ourData
        }
      })
    })
    return (
      <div className="pokeContainer">
        { myNewData.map(item => (
          <div className="container-div">
            <div className="img-container">
              <img src={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`} alt=""></img>
            </div>
            <h2 className="item-name">{item.name}</h2>
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
