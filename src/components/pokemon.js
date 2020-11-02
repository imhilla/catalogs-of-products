import React from 'react';
import { Link,  BrowserRouter } from 'react-router-dom';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: "empty" };
  }

  handleClick(item) {
    // BrowserRouter.push({
    //   pathname: "pokemon/" + item.id,
    //   state: { itemDetails: item }
    // });
    console.log('yess')
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ products: this.props.data.products })
    }, 4000)
  }

  render() {
    let ourData = this.props.data.products
    let category = this.props.filter
    let myNewData = [];
    ourData.map((item) => {
      item.types.map((type) => {
        if (type['type']['name'] === category) {
          myNewData.push(item)
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
              <Link  to={`/pokemon/${item.id}`} onClick={this.handleClick.bind(this, item)}>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`} alt=""></img>
              </Link>
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
