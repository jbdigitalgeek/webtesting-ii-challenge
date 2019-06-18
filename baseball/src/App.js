import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    calledBalls: 0,
    calledStrikes: 0,
    hits: 0
  };
  render() {
    return (
      <div className="App">
        <h2>Balls: {this.state.calledBalls}</h2>
        <h2>Strikes: {this.state.calledStrikes}</h2>
        <h2>Hits: {this.state.hits}</h2>
        <button onClick={this.handleStrikes}>Add Strike</button>
        <button onClick={this.handleFouls}>Add Foul</button>
        <button onClick={this.handleBalls}>Add Ball</button>
        <button onClick={this.handleHits}>Add Hit</button>

      </div>
    );

   
  }
  handleHits = e => {
    e.preventDefault();
      this.setState({
        calledStrikes: 0,
        calledBalls: 0,
        hits: this.state.hits + 1
    });
  };

  handleBalls = e => {
    e.preventDefault();
    if (this.state.calledBalls < 3) {
      const ballCount = this.state.calledBalls;
      this.setState({
        calledBalls: ballCount + 1
      });
    } else {
      const ballCount = 0;
      this.setState({
        calledBalls: ballCount,
        strikes: 0
      });
    }
  }
  handleFouls = e => {
    e.preventDefault();
    if (this.state.calledStrikes < 2) {
      const foulBall = this.state.calledStrikes;
      this.setState({
        calledStrikes: foulBall + 1
      });
    };
  };
  handleStrikes = e => {
    e.preventDefault();
    if (this.state.calledStrikes < 2) {
      const strikeCount = this.state.calledStrikes;
      this.setState({
        calledStrikes: strikeCount + 1
      })
    } else {
      const strikeCount = 0;
      this.setState({
        calledStrikes: strikeCount,
        calledBalls: 0
      })
    };

  };
}

    


export default App;
