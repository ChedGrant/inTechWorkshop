import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MyComponent from './Components/myComponent';
import AboutComponent from './Components/aboutComponent';


class App extends Component {
  render() {
    return (
      <div>
        <MyComponent/>
        <AboutComponent/>
      </div>
    );
  }
}

export default App;
