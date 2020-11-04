import React from "react";
import axios from 'axios';

class Random extends React.Component {
  constructor(props) {
    super(props)
    this.state = { random: [], }
  }

  componentDidMount() {
    const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    let empty = []
    let four = [1, 2, 3, 4]
    four.map(item => {
      let number = randomInteger(0, 50)
      empty.push(number)
      this.setState({ random: empty })
    })
  }

  render() {
    const fourPokes = this.state.random ? (
      <div className="randContainer">{
        this.state.random.map(num => {
          return (
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${num}.png`} alt="" className="random" />
          )
        })}</div>
    ) : (<div>Hello</div>);

    return (
      <div>
        {fourPokes}
      </div>
    );
  }
};

export default Random;
