import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Menu from "./core/Menu";
import NavBar from "./core/NavBar";
import Footer from "./core/Footer";
import BudgetTable from "./budgets/BudgetTable";
import rootStore from './store.js';
import LoginForm from "./users/LoginForm";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (

        <Provider store={ rootStore }>

          <BrowserRouter>
            <div>
              
              <Menu />
              <NavBar />

              <div className="px-content">
                
                <div className="page-header">
                  <h1>Título</h1>
                  
                </div>
                
                <Route exact path="/" component={BudgetTable}/>
                <Route path="/new-user/" component={LoginForm}/>
                
              </div>
              <Footer />
            </div>
          </BrowserRouter>

        </Provider>

    );
  }
}

export default App;
