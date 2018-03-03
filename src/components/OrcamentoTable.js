import React, { Component } from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';


class OrcamentoTable extends Component {

  constructor(props){

    super(props);

    this.columns = [{
      dataField: 'id',
      text: 'ID'
    }, {
      dataField: 'name',
      text: 'Descrição'
    }, {
      dataField: 'date',
      text: 'Data'
    }];

    this.state = {budgets: []};
    
  }

  componentDidMount(){
    
    this.setState({budgets: [
        {"id": 1, "name": "Cotação 1", "date": "12/12/1980"},
        {"id": 2, "name": "Cotação 2", "date": "12/12/1980"},
    ]});

  }

  render() {
    
    return (
      <BootstrapTable keyField='id' data={ this.state.budgets } columns={ this.columns } />
    );
  }
}

export default OrcamentoTable;