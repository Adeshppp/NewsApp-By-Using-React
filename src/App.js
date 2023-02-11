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

  setApi=(event)=>{
    this.setState({apiKey:event.target.value, permission:true})
  }
  constructor() {
    super();
    this.state = {
      country: "in",
      pageSize: 18,
      apiKey:"",
      permission:false
    }
  }
  handleChange=(event)=>{
    this.setState({apiKey:event.target.value})
  }
  render() {
    const { countries } = this.state;
    return (

      <BrowserRouter>

        <Navbar handleCountryToggle={this.handleCountryToggle} />
        {/* <div>
          <form>
            <label>
              Enter your API key <input type="text" value={this.state.apiKey} onChange={this.handleChange}/>
            </label>
            <button variant="primary" type="submit" onClick={this.setApi}> Submit </button>
          </form>
        </div>
        
        {this.state.permission ?
        
        ( */}
        <Routes>


          <Route path="/" element={<News key="top-headlines" pageSize={this.state.pageSize} country={this.state.country} category="general" />}></Route>

          <Route path="/business" element={<News key="business" pageSize={this.state.pageSize} country={this.state.country} category="business" />}></Route>

          <Route path="/entertainment" element={<News key="entertainment" pageSize={this.state.pageSize} country={this.state.country} category="entertainment" />}></Route>

          <Route path="/general" element={<News key="general" pageSize={this.state.pageSize} country={this.state.country} category="general" />}></Route>

          <Route path="/health" element={<News key="health" pageSize={this.state.pageSize} country={this.state.country} category="health" />}></Route>

          <Route path="/science" element={<News key="science" pageSize={this.state.pageSize} country={this.state.country} category="science" />}></Route>

          <Route path="/sports" element={<News key="sports" pageSize={this.state.pageSize} country={this.state.country} category="sports" />}></Route>

          <Route path="/technology" element={<News key="technology" pageSize={this.state.pageSize} country={this.state.country} category="technology" />}></Route>

        </Routes>
         {/* ):null */}
  {/* } */}
  




      </BrowserRouter>
    );
  }
}
