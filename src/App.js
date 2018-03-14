import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Menu from "./core/Menu";
import NavBar from "./core/NavBar";
import Footer from "./core/Footer";
import BudgetTable from "./budgets/BudgetTable";
import rootStore from './store.js';

class App extends Component {
  render() {
    return (

        <Provider store={ rootStore }>
          <div>
            <Menu />
            <NavBar />
            <div className="px-content">
              <div className="page-header">
                <h1>Título</h1>
              </div>
              <BudgetTable />
            </div>
            <Footer />
          </div>
        </Provider>

    );
  }
}

export default App;
