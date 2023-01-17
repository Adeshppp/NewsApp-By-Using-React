import './App.css';

import React, { Component } from 'react';
import Navbar from './My Components/Navbar';
import News from './My Components/News';

export default class App extends Component {
  c="Adesh";
  render() {
    return (
      <>
      <Navbar/>
      <News pageSize={18} country="in"/>
      </>
    )
  }
}
