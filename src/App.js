import './App.css';

import React, { Component } from 'react';
import Navbar from './My Components/Navbar';
import News from './My Components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  handleCountryToggle = () => {
    this.setState(prevState => {
      return {
        country: prevState.country === 'in' ? 'us' : 'in'
      };
    });
  };


  constructor() {
    super();
    this.state = {
      country: "in",
      pageSize: 18,
      apiKey: "603b756ed8f64fddac80a3cbab48e2d0",
      isLoaded: false,
      error: false
    }
  }

  // handleApiKeyChange = event => {
  //   this.setState({ apiKey: event.target.value });
  // };

  // handleApiKeySubmit = event => {
  //   event.preventDefault();
  //   this.setState({ isLoaded: true });
  // };

  // componentDidCatch(error, info) {
  //   this.setState({ error: true });
  // }

  render() {

    // ================================= Api Key from user =====================================
    // const { apiKey, isLoaded, error } = this.state;

    // if (!isLoaded) {
    //   return (
    //     <form onSubmit={this.handleApiKeySubmit}>
    //       <input
    //         type="text"
    //         placeholder="Enter API Key"
    //         value={apiKey}
    //         onChange={this.handleApiKeyChange}
    //       />
    //       <button type="submit">Submit</button>
    //     </form>
    //   );
    // }

    // if (error) return <div>An error occurred. Please enter a valid API key.</div>;
    // above code takes apikey from user
    // =========================================================================================

    return <BrowserRouter >
      <Navbar handleCountryToggle={this.handleCountryToggle} />
      <Routes>
        <Route path="/" element={<News key="top-headlines" pageSize={this.state.pageSize} apiKey={this.state.apiKey} country={this.state.country} category="general" />}></Route>

        <Route path="/business" element={<News key="business" pageSize={this.state.pageSize} apiKey={this.state.apiKey} country={this.state.country} category="business" />}></Route>

        <Route path="/entertainment" element={<News key="entertainment" pageSize={this.state.pageSize} apiKey={this.state.apiKey} country={this.state.country} category="entertainment" />}></Route>

        <Route path="/general" element={<News key="general" pageSize={this.state.pageSize} apiKey={this.state.apiKey} country={this.state.country} category="general" />}></Route>

        <Route path="/health" element={<News key="health" pageSize={this.state.pageSize} apiKey={this.state.apiKey} country={this.state.country} category="health" />}></Route>

        <Route path="/science" element={<News key="science" pageSize={this.state.pageSize} apiKey={this.state.apiKey} country={this.state.country} category="science" />}></Route>

        <Route path="/sports" element={<News key="sports" pageSize={this.state.pageSize} apiKey={this.state.apiKey} country={this.state.country} category="sports" />}></Route>

        <Route path="/technology" element={<News key="technology" pageSize={this.state.pageSize} apiKey={this.state.apiKey} country={this.state.country} category="technology" />}></Route>
      </Routes>
    </BrowserRouter >
  }
}

