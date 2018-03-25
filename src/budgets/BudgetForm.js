import React from 'react';
import { Control, Form, Errors, actions } from 'react-redux-form';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {newBudget, getNewDate} from './actionCreators';
import {Redirect} from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {reduxForm} from "redux-form";
import ItemList from "./ItemList";

class BudgetForm extends React.Component {
  
  handleSubmit(data) {
    this.props.newBudget(data);
  }

  render() {
    
    const {dispatch, getNewDate} = this.props;
    dispatch( actions.reset('form_budget.date_limit'));
    dispatch( actions.focus('form_budget.title'));
    
    if(this.props.success){
      
      return <Redirect to="/budgets" />
    }
    const today = new Date();
    return (
      <div>
        
        <div className="col-md-4">
          
          <div className="col-md-12">
            <Form model="form_budget" onSubmit={data => this.handleSubmit(data)}> 
              
            <Control type="hidden" model=".url" id="url" defaultValue="/budgets/new" className="form-control" />

              <h3 className="fix-margin-budget-title"> Passo 1</h3>
              <hr />

              <div className="form-group">
                <label htmlFor=".title">Assunto do e-mail: <span className="required">*</span></label>
                <Control.text model=".title" id="title" className="form-control" required />
                <small className="text-muted">Por exemplo: "Pedido de orçamento de canetas"</small>
                <Errors
                    className="required"
                    model=".title"
                    show="touched"
                    messages={{
                      valueMissing: 'Campo obrigatório',
                      typeMismatch: 'Campo obrigatório',
                    }}
                />
              </div>

              <div className="form-group">
                <label htmlFor=".description">Descreva sua necessidade: <span className="required">*</span></label>
                <Control.textarea model=".description" className="form-control" required />
                <Errors
                    className="required"
                    model=".description"
                    show="touched"
                    messages={{
                      valueMissing: 'Campo obrigatório',
                      typeMismatch: 'Campo obrigatório',
                    }}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor=".date_limit">Data limite de resposta:</label>
                
                <Control.text
                  id="date_limit"
                  onChange={getNewDate}
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

        </div>

        <div className="col-md-8">
                    
            <div className="col-md-12">
              <h3 className="fix-margin-budget-title">Passo 2</h3>
              <hr />
              <ItemList />
            </div>

        </div>
      </div>
      
    );
  }
}

const mapStateToProps =  state => {

  return {
    success: state.budget.success,
    error: state.budget.error,
    start_date: state.budget.start_date,
  }
}

const mapDispatchtoProps = dispatch => {
  
  return bindActionCreators({newBudget, getNewDate}, dispatch)
}

BudgetForm = reduxForm({form: 'BudgetForm', destroyOnUnmount: false})(BudgetForm);

export default connect(mapStateToProps, mapDispatchtoProps)(BudgetForm)