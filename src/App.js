import React, { Component } from 'react';
//import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BudgetTable from "./components/BudgetTable";

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
          <BudgetTable />
        </div>

        <Footer />
        
      </div>

    );
  }
}

export default App;
