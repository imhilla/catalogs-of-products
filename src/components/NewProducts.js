import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { random: [] };
  }

  componentDidMount() {
    const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const empty = [];
    const four = [1, 2, 3, 4, 5, 6, 7, 8];
    four.map(() => {
      const number = randomInteger(0, 50);
      empty.push(number);
      this.setState({ random: empty });
      return 'empty';
    });
  }

  render() {
    const { random } = this.state;
    const fourPokes = random ? (
      <div className="newArrival">
        {
          random.map(num => (
            <img key={uuidv4()} src={`https://pokeres.bastionbot.org/images/pokemon/${num}.png`} alt="" className="random" />
          ))
        }
      </div>
    ) : (<div>Hello</div>);

    return (
      <div>
        <h2 className="new">NEW ARRIVALS</h2>
        {fourPokes}
      </div>
    );
  }
}

export default NewProducts;
