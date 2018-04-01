import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextFormControl } from './TextFormControl.js';
import { SubmitButton } from './SubmitButton.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      username: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleNewUserOnClick = this.handleNewUserOnClick.bind(this);
  }

  handleNameChange(e) {
    const newName = e.target.value;
    this.setState({name: newName});
  }

  handleUsernameChange(e) {
    const newUsername = e.target.value;
    this.setState({username: newUsername});
  }

  handleEmailChange(e) {
    const newEmail = e.target.value;
    this.setState({email: newEmail});
  }

  handleNewUserOnClick(e) {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="body">
          <TextFormControl title="Name" onChange={this.handleNameChange} />
          <TextFormControl title="Username" onChange={this.handleUsernameChange} />
          <TextFormControl title="Email" onChange={this.handleEmailChange} />
          <SubmitButton btnText="Show new user" onClick={this.handleNewUserOnClick} />
        </div>
      </div>
    );
  }
}

export default App;
