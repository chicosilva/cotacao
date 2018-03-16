import React, { Component } from 'react';
import Alert from 'react-s-alert';
import { Provider } from 'react-redux';
import Menu from "./core/Menu";
import NavBar from "./core/NavBar";
import Footer from "./core/Footer";
//import BudgetTable from "./budgets/BudgetTable";
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
            <Alert stack={{limit: 3}} html={true} />
              <Menu />
              <NavBar />

              <div className="px-content">
                
                <div className="page-header">
                  <h1>Título</h1>
                </div>
                
                {/* <Route exact path="/" component={BudgetTable}/> */}
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
