import React, { Component } from 'react';
import './App.css';

class Stopwatch extends Component {
  constructor(props){
    super(props);
    this.state = {
       secondsRemaining: this.props.totalSeconds,
       timer: 0
    }
  }

  componentWillMount() {
    this.getTimeLeft(this.state.secondsRemaining);
  }

  componentDidMount() {
    this.timer();
  }

  componentDidUpdate(newProps) {
    console.log('componentDidUpdate', this.props, newProps);
    if (newProps.totalSeconds !== this.props.totalSeconds) {
      this.updateTimer(this.props.totalSeconds);
      clearInterval(this.state.timer)
    }
  }

  updateTimer(newTimer) {
    this.setState({secondsRemaining: newTimer});
    this.timer();
  }

  timer() {
    const timer = setInterval(() => this.getTimeLeft(this.state.secondsRemaining), 1000);
    this.setState({ timer })
  }

  getTimeLeft(time) {
    let secondsRemaining = time - 1;

    if (secondsRemaining > -1) {
      this.setState({ secondsRemaining });
    } else {
      alert("Time's up!!!");
      clearInterval(this.state.timer);
    }

  }

  render(){
   return (
    <div className="stopwatch">
          <div>{this.state.secondsRemaining} seconds left</div>
    </div>
   );
  }
}
export default Stopwatch;
