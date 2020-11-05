import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { random: [] };
  }

  componentDidMount() {
    const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const empty = [];
    const four = [1, 2, 3, 4];
    four.forEach(() => {
      const number = randomInteger(0, 50);
      empty.push(number);
      this.setState({ random: empty });
    });
  }

  render() {
    const { random } = this.state;
    const fourPokes = random ? (
      <div className="randContainer">
        {
          random.map(num => (
            <img key={uuidv4()} src={`https://pokeres.bastionbot.org/images/pokemon/${num}.png`} alt="" className="random" />
          ))
        }
      </div>
    ) : (<div>Hello</div>);

    return (
      <div>
        {fourPokes}
      </div>
    );
  }
}

export default Random;
