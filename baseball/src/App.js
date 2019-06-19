import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    hits: 0
  };
  render() {
    return (
      <div className="App">
        <Display
          balls={this.state.balls}
          strikes={this.state.strikes}
          hits={this.state.hits}
        />
        <Dashboard
          hit ={this.handleHits}
          strike={this.handleStrikes} 
          ball={this.handleBalls}
          foul={this.handleFouls} 
          />
      </div>
    );
  }
  handleHits = e => {
    e.preventDefault();
    this.setState({
      strikes: 0,
      balls: 0,
      hits: this.state.hits + 1
    });
  };

  handleBalls = e => {
    e.preventDefault();
    if (this.state.balls < 3) {
      const ballCount = this.state.balls;
      this.setState({
        balls: ballCount + 1
      });
    } else {
      const ballCount = 0;
      this.setState({
        balls: ballCount,
        strikes: 0
      });
    }
  };
  handleFouls = e => {
    e.preventDefault();
    if (this.state.strikes < 2) {
      const foulBall = this.state.strikes;
      this.setState({
        strikes: foulBall + 1
      });
    }
  };
  handleStrikes = e => {
    e.preventDefault();
    if (this.state.strikes < 2) {
      const strikeCount = this.state.strikes;
      this.setState({
        strikes: strikeCount + 1
      });
    } else {
      const strikeCount = 0;
      this.setState({
        strikes: strikeCount,
        calledBalls: 0
      });
    }
  };
}

export default App;
