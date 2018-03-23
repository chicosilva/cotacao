import React from 'react';
import { Control, Form, Errors } from 'react-redux-form';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {newBudget, updateDate, getNewDate} from './actionCreators';
import {Redirect} from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


class BudgetForm extends React.Component {
  
  handleSubmit(data) {
    this.props.newBudget(data);
  }

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date){
    
    this.props.updateDate(date);
  }

  render() {
    
    if(this.props.success){
      return <Redirect to="/budgets" />;
    }
    const today = new Date();
    return (
      <div>
        <div className="col-md-6">
        
          <Form model="form_budget" onSubmit={data => this.handleSubmit(data)}> 
            
            <h3 className="fix-margin-budget-title"> Passo 1</h3>
            <hr />

            <div className="form-group">
              <label htmlFor="form_budget.title">Assunto do e-mail: <span className="required">*</span></label>
              <Control.text model="form_budget.title" id="title" className="form-control" required />
              <small className="text-muted">Por exemplo: "Pedido de orçamento de canetas"</small>
              <Errors
                  className="required"
                  model="form_budget.title"
                  show="touched"
                  messages={{
                    valueMissing: 'Campo é obrigatório',
                    typeMismatch: 'Campo é obrigatório',
                  }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="form_budget.description">Descreva sua necessidade: <span className="required">*</span></label>
              <Control.textarea model="form_budget.description" className="form-control" required />
              <Errors
                  className="required"
                  model="form_budget.description"
                  show="touched"
                  messages={{
                    valueMissing: 'Campo é obrigatório',
                    typeMismatch: 'Campo é obrigatório',
                  }}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="form_budget.date_limit">Data limite de resposta:</label>
              
              <Control.text
                
                onChange={this.handleChange}
                selected={this.props.start_date}
                component={DatePicker}
                model="form_budget.date_limit"
                className="form-control" 
                value={'' || null}
                dateFormat="DD/MM/YYYY"
                disabledDays={{before: today}}
                isClearable={true}
                
              />

              <small className="text-muted">
                Caso seja preciso, informe a data limite para receber orçamentos. 
                <br />
                Essa data também pode ser editada.
              </small>
            </div>
            <hr />
            <button type="submit" className="btn btn-primary">
              Próximo passo
            </button>

          </Form>
        </div>

        <div className="col-md-5">
            <h3 className="fix-margin-budget-title">Relatório de orçamentos da mesma catagoria</h3>
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = function (state){

  return {
    success: state.budget.success,
    error: state.budget.error,
    start_date: state.budget.start_date,
  }
}

const mapDispatchtoProps = dispatch => {
  return bindActionCreators({newBudget, updateDate, getNewDate}, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(BudgetForm)