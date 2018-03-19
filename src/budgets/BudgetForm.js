import React from 'react';
import { Control, Form, Errors } from 'react-redux-form';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {newBudget} from './actionCreators';
import { AlertDanger, AlertSuccess } from '../core/AlertMessages';
import {Redirect} from "react-router-dom";


class BudgetForm extends React.Component {
  
  handleSubmit(data) {
    this.props.newBudget(data);
  }
  
  render() {
    
    if(this.props.error){
      AlertDanger(this.props.data, 'msg');
    }
    if(this.props.success){
      AlertSuccess("Usuário cadastrado com sucesso!");
    }
    
    if(this.props.success){
      return <Redirect to="/budgets" />;
    }
    
    return (
      <div>
        <div className="col-md-6">
        
          <Form model="form_user" onSubmit={data => this.handleSubmit(data)}> 

            <div className="form-group">
              <label htmlFor="form_user.first_name">Título:</label>
              <Control.text model="form_user.first_name" id="first_name" className="form-control" required />
              <small class="text-muted">O título será o assunto do e-mail, por exemplo: "Orçamento de canetas"</small>
            </div>

            <div className="form-group">
              <label htmlFor="form_user.first_name">Descreva a necessidade:</label>
              <Control.textarea model="form_user.first_name" id="first_name" className="form-control" required />
              
            </div>

            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          
          </Form>
        </div>

        <div className="col-md-6">
            <h4>Relatório de orçamentos da mesma catagoria</h4>
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = function (state){

  return {
    data: state.user.data,
    success: state.user.success,
    error: state.user.error,
  }
}

const mapDispatchtoProps = dispatch => {
  return bindActionCreators({newBudget}, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(BudgetForm)