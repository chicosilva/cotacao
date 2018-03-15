import React, { Component } from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import LoginForm from "../users/LoginForm";
import { bindActionCreators } from "redux";
import {connect} from "react-redux"
import {updateList, removeList} from "../users/actionCreators";


class BudgetTable extends Component {

  componentDidMount(){
    this.props.updateList()
  }

  render() {
    
    return (
      <div>
        <BootstrapTable keyField='_id' data={ this.props.list } columns={ this.props.columns } />
        
        <button onClick={this.props.removeList} >
          Remover Lista
        </button>
        <LoginForm />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  list: state.users.list,
  columns: state.users.columns,
})

const mapDispatchtoProps = dispatch => {
  return bindActionCreators({updateList, removeList}, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(BudgetTable);