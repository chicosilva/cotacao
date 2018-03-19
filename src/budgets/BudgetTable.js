import React, { Component } from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { bindActionCreators } from "redux";
import {connect} from "react-redux";
import {updateList} from "./actionCreators";
import {Link} from "react-router-dom";

class BudgetTable extends Component {

  componentDidMount(){
    this.props.updateList();
  }
  
  render() {
    
    return (
      <div>
        
        <div>
          <Link to="/budgets/new/" className="btn btn-success">
            <i className="px-nav-icon ion-plus-round"></i>
            <span className="px-nav-label">Novo Orçamento</span>
          </Link>
        </div>

        {!this.props.list ? 
          ( <BootstrapTable keyField='_id' data={ this.props.list } columns={ this.props.columns } /> )
          :
          <div className="aler alert-warning">Nenhum registro encontrado!</div>
        }
        
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    list: state.budgets.data,
    columns: state.budgets.columns,
  }
)

const mapDispatchtoProps = dispatch => {
  return bindActionCreators({updateList}, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(BudgetTable);