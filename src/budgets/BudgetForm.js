import React from 'react';
import { Control, Form } from 'react-redux-form';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {newBudget} from './actionCreators';


class BudgetForm extends React.Component {
  
  handleSubmit(data) {
    this.props.newBudget(data);
  }
  
  render() {
    
    return (
      <div>
        <div className="col-md-6">
        
          <Form model="form_budget" onSubmit={data => this.handleSubmit(data)}> 

            <div className="form-group">
              <label htmlFor="form_budget.first_name">Título:</label>
              <Control.text model="form_budget.title" id="title" className="form-control" required />
              <small class="text-muted">O título será o assunto do e-mail, por exemplo: "Orçamento de canetas"</small>
            </div>

            <div className="form-group">
              <label htmlFor="form_budget.first_name">Descreva a necessidade:</label>
              <Control.textarea model="form_budget.description" id="description" className="form-control" required />
            </div>

            <div className="form-group">
              <label htmlFor="form_budget.first_name">Data limite de resposta:</label>
              <Control.text model="form_budget.date_limit" id="date_limit" className="form-control" required />
              <small class="text-muted">Caso seja preciso, informe a data limite para receber orçamentos</small>
            </div>

            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          
          </Form>
        </div>

        <div className="col-md-5">
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