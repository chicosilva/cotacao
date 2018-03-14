import React from 'react';
import { Control, Form, Errors } from 'react-redux-form';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import changeValue from './actionCreators';


class LoginForm extends React.Component {
  
  handleSubmit(user) {
    
  }

  render() {
    return (
      <Form
        model="user"
        onSubmit={(user) => this.handleSubmit(user)}
      > 
       
        <label htmlFor="user.first_name">Nome:</label>
        <Control.text model="user.first_name" id="first_name" required />

        <label htmlFor="user.lastName">Sobre nome:</label>
        <Control.text model="user.last_name" id="user.last_name" required />

        <label htmlFor="user.email">email:</label>
        <Control.text type="email" model="user.email" id="user.email" required />
        
        <Errors
            className="errors"
            model="user.email"
            show="touched"
            messages={{
              valueMissing: 'Email is required',
              typeMismatch: 'Invalid email address',
            }}
        />

        <label htmlFor="user.email">Senha:</label>
        <Control.text type="password" required model="user.password" id="user.password" />

        <button type="submit">
          New User
        </button>
      </Form>
    );
  }
}

const mapStateToProps = function (state){
  return {
    field: state.field.value
  }
}

const mapDispatchtoProps = dispatch =>{
  return bindActionCreators({changeValue}, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(LoginForm)
