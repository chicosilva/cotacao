import React from 'react';
import { Control, Form, Errors } from 'react-redux-form';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import newUser from './actionCreators';
import {Redirect} from "react-router-dom";


class NewUserForm extends React.Component {
  
  handleSubmit(data) {
    this.props.newUser(data);
  }
  
  render() {
    
    if(this.props.success){
      return <Redirect to="/budgets" />;
    }
    
    return (
      <div>
      
      <Form model="form_user" onSubmit={data => this.handleSubmit(data)}> 
        
        <label htmlFor="form_user.first_name">Nome:</label>
        <Control.text model="form_user.first_name" id="first_name" required />

        <label htmlFor="form_user.lastName">Sobre nome:</label>
        <Control.text model="form_user.last_name" id="form_user.last_name" required />

        <label htmlFor="form_user.email">email:</label>
        <Control.text type="email" model="form_user.email" id="form_user.email" required />
        
        <Errors
            className="errors"
            model="form_user.email"
            show="touched"
            messages={{
              valueMissing: 'e-mail é obrigatório',
              typeMismatch: 'e-mail inválido',
            }}
        />

        <label htmlFor="form_user.password">Senha:</label>
        <Control.text type="password" required model="form_user.password" id="form_user.password" />

        <button type="submit">
          Salvar
        </button>
      
      </Form>
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
  return bindActionCreators({newUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(NewUserForm)