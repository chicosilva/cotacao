import React, { Component } from 'react';
import Menu from "./core/Menu";
import NavBar from "./core/NavBar";
import Footer from "./core/Footer";
import Title from "./core/Title";
import BudgetTable from "./budgets/BudgetTable";
import BudgetForm from "./budgets/BudgetForm";
import NewUserForm from "./users/NewUserForm";
import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
require('./core/dependencies');

class App extends Component {
  render() {
    return (
          <BrowserRouter>
            <div>
              
              <ToastContainer autoClose={5000} />

              <Menu />
              <NavBar />
              <div className="px-content">
                
                <Title />
                <Route exact path="/budgets/new/" component={BudgetForm}/>
                <Route exact path="/budgets" component={BudgetTable}/>
                <Route exact path="/" component={NewUserForm}/>
                
              </div>
              <Footer />
              
            </div>

          </BrowserRouter>

    );
  }
}

export default App;
