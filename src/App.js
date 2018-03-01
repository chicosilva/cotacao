import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (

      <div>
        <Menu />
        <NavBar />
        
        <div className="px-content">
          <div className="page-header">
            <h1>Header</h1>
          </div>
        </div>
        
      </div>

    );
  }
}

export default App;
