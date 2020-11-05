import React from 'react';

class NewProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { random: [] };
  }

  componentDidMount() {
    const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const empty = [];
    const four = [1, 2, 3, 4, 5, 6, 7, 8];
    four.map(item => {
      const number = randomInteger(0, 50);
      empty.push(number);
      this.setState({ random: empty });
    });
  }

  render() {
    const fourPokes = this.state.random ? (
      <div className="newArrival">
        {
          this.state.random.map(num => (
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${num}.png`} alt="" className="random" />
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
