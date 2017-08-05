import React, { Component } from 'react';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    };
  }

  handleChangeInput = (event) => {
    this.setState({
      newDeadline: event.target.value
    });
  };

  changeDeadline = () => {
    this.setState({
      deadline: this.state.newDeadline
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock 
          deadline={this.state.deadline}
        />
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder="New Date"
            onChange={this.handleChangeInput}
          />
          <Button onClick={this.changeDeadline}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;

