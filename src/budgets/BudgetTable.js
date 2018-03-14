import React, { Component } from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import LoginForm from "../users/LoginForm";
const keys = require('../configs/keys');
const axios = require('axios');


class BudgetTable extends Component {

  constructor(props){

    super(props);

    this.columns = [{
      dataField: '_id',
      text: 'ID'
    }, {
      dataField: 'description',
      text: 'Descrição'
    }, {
      dataField: 'created_at',
      text: 'Data'
    }];

    this.state = {budgets: []};
    
  }

  componentDidMount(){
    
    axios.get(keys.urlApi+'/budgets/', {
      params: {
        token: 12345
      }
    })
    .then( (response) => {
            
      this.setState({budgets: response.data.budgets});

    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  render() {
    
    return (
      <div>
        <BootstrapTable keyField='_id' data={ this.state.budgets } columns={ this.columns } />
        <LoginForm />
      </div>
    )
  }
}

export default BudgetTable;