import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: true
    }
  }

  // either change to arrow function or bind to have appropriate context for `this`
  handleClick = () => {
    // todo
    this.setState({on: !this.state.on})
  }

  render() {
    return (
      <button onClick={this.handleClick}>{ (this.state.on) ? 'ON' : 'OFF' }</button>
    );
  }
}

export default Toggle;