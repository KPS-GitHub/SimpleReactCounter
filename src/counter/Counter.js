import React, { Component } from "react";

class Counter extends Component {
  // set up state, bind functions to 'this' so they are useable for affecting state
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
  }

  // define increase, decrease, reset functions
  increase(e) {
    var currentCount = this.state.count;
    if (e.shiftKey) {
      currentCount += 10;
    } else {
      currentCount += 1;
    }
    this.setState({
      count: currentCount
    });
  }
  decrease(e) {
    var currentCount = this.state.count;
    if (e.shiftKey) {
      currentCount -= 10;
    } else {
      currentCount -= 1;
    }
    this.setState({
      count: currentCount
    });
  }
  reset(e) {
    this.setState({
      count: 0
    });
  }

  render() {
    const containerStyle = {
      border: "5px solid black",
      padding: "20px"
    };

    let buttonStyle = {
      padding: "10px",
      margin: "10px",
      fontSize: "1em"
    };

    return (
      <div style={containerStyle}>
        <div>
          <h1>{this.state.count}</h1>
        </div>
        <div>
          <button onClick={this.increase} style={buttonStyle}>
            +
          </button>
          <button onClick={this.decrease} style={buttonStyle}>
            -
          </button>
          <button onClick={this.reset} style={buttonStyle}>
            reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
