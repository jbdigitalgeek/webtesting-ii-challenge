import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    hits: 0
  };
  render() {
    return (
      <div className="App">
        <h2>Balls: {this.state.balls}</h2>
        <h2>Strikes: {this.state.strikes}</h2>
        <button onClick={this.handleStrikes}>Strike</button>
        <button onClick={this.handleFouls}>Foul</button>
        <button onClick={this.handleBalls}>Ball</button>
        <button onClick={this.handleHits}>Hit</button>

      </div>
    );

   
  }
  handleBalls = e => {
    e.preventDefault();
    if (this.state.balls < 3) {
      const ballCount = this.state.balls;
      this.setState({
        balls: ballCount + 1
      });
    } else if (this.state.balls === 3) {
      const ballCount = 0;
      this.setState({
        balls: ballCount,
        strikes: 0
      });
    }
  }
  handleFouls = () => {

  };
  handleStrikes = () => {

  };
}

    


export default App;
