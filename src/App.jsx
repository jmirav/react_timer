import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: '',
      totalSeconds: '60',
      newSeconds: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }

  changeTotalSeconds() {
    this.setState({totalSeconds: this.state.newSeconds})
    // console.log(this.state.newSeconds);
  }

  render() {
    return (
      <div className="App">
        <div>
          <div className="App-title">
            Countdown to {this.state.deadline}
          </div>
          <Clock
            deadline={this.state.deadline}
          />

          <Form inline>
            <FormControl
              className="Deadline-input"
              placeholder="new date"
              onChange={event => this.setState({newDeadline: event.target.value})}
            />
            <Button onClick={() => this.changeDeadline() }>Submit</Button>
          </Form>

          <div className="App-title">
            Current Timer to: {this.state.totalSeconds} seconds
          </div>
          <Stopwatch
            totalSeconds={this.state.totalSeconds}
          />
          <Form inline>
            <FormControl
              className="TotalSeconds-input"
              placeholder="new timer"
              onChange={event => this.setState({newSeconds: event.target.value})}
            />
            <Button onClick={() => this.changeTotalSeconds() }>Submit</Button>
          </Form>

        </div>
      </div>
    )
  }
}

export default App;
