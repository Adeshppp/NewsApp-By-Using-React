import './App.css';
import React, { useState } from "react";

import LoadingBar from 'react-top-loading-bar'
import Navbar from './My Components/Navbar';
import News from './My Components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App=()=>{
  // apiKey = process.env.REACT_APP_NEWS_API

        // const [apiKey, setapiKey] = useState("f4db36aa4f83445687fb7e57bd5c6f19");

        // const [apiKey, setapiKey] = useState("603b756ed8f64fddac80a3cbab48e2d0");
        const apiKey="603b756ed8f64fddac80a3cbab48e2d0";
        const [country, setCountry] = useState('in');
        const pageSize=18;
        // const [isLoaded, setIsLoaded] = useState(false);
        // const [error, setError] = useState(false);
        const [progress, setProgress] = useState(10);

  const handleCountryToggle = () => {
    setCountry(country === 'in' ? 'us' : 'in');
  };

  

  const setProgressFunc=(progress)=>{
    setProgress(progress);
  }

    return <BrowserRouter >
     
            <Navbar handleCountryToggle={handleCountryToggle}/>
            <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(progress)}
      />

      <Routes>
        <Route path="/" element={<News setProgress={setProgressFunc} key="top-headlines" pageSize={pageSize} apiKey={apiKey} country={country} category="general" />}></Route>

        <Route path="/business" element={<News setProgress={setProgressFunc} key="business" pageSize={pageSize} apiKey={apiKey} country={country} category="business" />}></Route>

        <Route path="/entertainment" element={<News setProgress={setProgressFunc} key="entertainment" pageSize={pageSize} apiKey={apiKey} country={country} category="entertainment" />}></Route>

        <Route path="/general" element={<News setProgress={setProgressFunc} key="general" pageSize={pageSize} apiKey={apiKey} country={country} category="general" />}></Route>

        <Route path="/health" element={<News setProgress={setProgressFunc} key="health" pageSize={pageSize} apiKey={apiKey} country={country} category="health" />}></Route>

        <Route path="/science" element={<News setProgress={setProgressFunc} key="science" pageSize={pageSize} apiKey={apiKey} country={country} category="science" />}></Route>

        <Route path="/sports" element={<News setProgress={setProgressFunc} key="sports" pageSize={pageSize} apiKey={apiKey} country={country} category="sports" />}></Route>

        <Route path="/technology" element={<News setProgress={setProgressFunc} key="technology" pageSize={pageSize} apiKey={apiKey} country={country} category="technology" />}></Route>

        <Route path="/technology" element={<News setProgress={setProgressFunc} key="cricket" pageSize={pageSize} apiKey={apiKey} country={country} q="cricket" />}></Route>

      </Routes>
    </BrowserRouter >
  


};
export default App;


