import React, { Component } from 'react';
import Alert from 'react-s-alert';
import { Provider } from 'react-redux';
import Menu from "./core/Menu";
import NavBar from "./core/NavBar";
import Footer from "./core/Footer";
import Title from "./core/Title";
import BudgetTable from "./budgets/BudgetTable";
import BudgetForm from "./budgets/BudgetForm";
import rootStore from './store.js';
import NewUserForm from "./users/NewUserForm";
import { BrowserRouter, Route } from "react-router-dom";
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
require('react-s-alert/dist/s-alert-default.css');

class App extends Component {
  render() {
    return (

        <Provider store={ rootStore }>

          <BrowserRouter>
            <div>
              <Alert stack={{limit: 5}} html={true} />
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
        
        </Provider>

    );
  }
}

export default App;
