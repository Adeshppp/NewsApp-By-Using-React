import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c="Adesh";
  render() {
    return (
      <div>
        Hello This is my first class based component. {this.c}
      </div>
    )
  }
}
