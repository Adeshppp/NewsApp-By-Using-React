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
  
  state={
    country:'in'
  };


  handleCountryToggle = () => {
    this.setState(prevState => {
      return {
        country: prevState.country === 'in' ? 'us' : 'in'
        
      };
    });
  };

  constructor(){
    super();
    this.state={
        country:"in",
        pageSize:18
    }
  }
  render() {
    const { countries } = this.state;
    return (
      
      <BrowserRouter>

        <Navbar  handleCountryToggle={this.handleCountryToggle}/>
        
        <Routes>
          

          <Route path="/" element={<News key="top-headlines" pageSize={this.state.pageSize} country={this.state.country} catagory="general" />}></Route>

          <Route path="/business" element={<News key="business" pageSize={this.state.pageSize} country={this.state.country} catagory="business" />}></Route>

          <Route path="/entertainment" element={<News key="entertainment" pageSize={this.state.pageSize} country={this.state.country} catagory="entertainment" />}></Route>

          <Route path="/general" element={<News key="general" pageSize={this.state.pageSize} country={this.state.country} catagory="general" />}></Route>

          <Route path="/health" element={<News key="health" pageSize={this.state.pageSize} country={this.state.country} catagory="health" />}></Route>

          <Route path="/science" element={<News key="science" pageSize={this.state.pageSize} country={this.state.country} catagory="science" />}></Route>

          <Route path="/sports" element={<News key="sports" pageSize={this.state.pageSize} country={this.state.country} catagory="sports" />}></Route>

          <Route path="/technology" element={<News key="technology" pageSize={this.state.pageSize} country={this.state.country} catagory="technology" />}></Route>

        </Routes>
      </BrowserRouter>
    )
  }
}
