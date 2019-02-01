import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClickHello = () => {
    this.setState({value: 'Hello'});
  }

  handleClickGoodbye = () => {
    this.setState({value: 'Goodbye'});
  }

  handleClickMessage = () => {
    alert(this.state.value);
  }

  handleClickUpperCase = () => {
    this.setState({value: this.state.value.toUpperCase()});
  }

  handleClickLowerCase = () => {
    this.setState({value: this.state.value.toLowerCase()});
  }

  handleClickClear = () => {
    this.setState({value: ''});
  }

  render() {
    return (
      <div>

        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <p>
          <label>
            Input:<br></br>
            <input type="text" size="50" value={this.state.value} onChange={this.handleChange.bind(this)} />
          </label>
        </p>

        <p>
          <button onClick={this.handleClickHello}>Hello</button>
        </p>

        <p>
          <button onClick={this.handleClickGoodbye}>Goodbye</button>
        </p>

        <p>
          <button disabled={!this.state.value}  onClick={this.handleClickUpperCase}>Upper Case</button>
        </p>

        <p>
          <button disabled={!this.state.value}  onClick={this.handleClickLowerCase}>Lower Case</button>
        </p>

        <p>
          <button disabled={!this.state.value} onClick={this.handleClickMessage}>Show Input Message</button>
        </p>

        <p>
          <button disabled={!this.state.value} onClick={this.handleClickClear}>Clear Input Message</button>
        </p>

      </div>
    );
  }
}

export default App;

