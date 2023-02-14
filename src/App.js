import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react';
import Navbar from './My Components/Navbar';
import News from './My Components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  // apiKey = process.env.REACT_APP_NEWS_API
  apiKey = "603b756ed8f64fddac80a3cbab48e2d0";

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
      // apiKey: "f4db36aa4f83445687fb7e57bd5c6f19",
      // apiKey:"603b756ed8f64fddac80a3cbab48e2d0",
      isLoaded: false,
      error: false,
      progress:10
    }
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return <BrowserRouter >
     
            <Navbar handleCountryToggle={this.handleCountryToggle}/>
            <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(progress)}
      />

      <Routes>
        <Route path="/" element={<News setProgress={this.setProgress} key="top-headlines" pageSize={this.state.pageSize} apiKey={this.apiKey} country={this.state.country} category="general" />}></Route>

        <Route path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.state.pageSize} apiKey={this.apiKey} country={this.state.country} category="business" />}></Route>

        <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.state.pageSize} apiKey={this.apiKey} country={this.state.country} category="entertainment" />}></Route>

        <Route path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.state.pageSize} apiKey={this.apiKey} country={this.state.country} category="general" />}></Route>

        <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.state.pageSize} apiKey={this.apiKey} country={this.state.country} category="health" />}></Route>

        <Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.state.pageSize} apiKey={this.apiKey} country={this.state.country} category="science" />}></Route>

        <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.state.pageSize} apiKey={this.apiKey} country={this.state.country} category="sports" />}></Route>

        <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.state.pageSize} apiKey={this.apiKey} country={this.state.country} category="technology" />}></Route>

        <Route path="/technology" element={<News setProgress={this.setProgress} key="cricket" pageSize={this.state.pageSize} apiKey={this.apiKey} country={this.state.country} q="cricket" />}></Route>

      </Routes>
    </BrowserRouter >
  }
}

