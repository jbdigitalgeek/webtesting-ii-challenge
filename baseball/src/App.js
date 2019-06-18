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
  handleBalls = e => {
    e.preventDefault();
    if (this.state.calledBalls < 3) {
      const ballCount = this.state.calledBalls;
      this.setState({
        calledBalls: ballCount + 1
      });
    } else if (this.state.calledBalls === 3) {
      const ballCount = 0;
      this.setState({
        calledBalls: ballCount,
        strikes: 0
      });
    }
  }
  handleFouls = () => {

  };
  handleStrikes = e => {
    e.preventDefault();
    if (this.state.calledStrikes < 2) {
      
    }

  };
}

    


export default App;
