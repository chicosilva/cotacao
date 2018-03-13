import React from 'react';
import { Control, Form, actions, Errors } from 'react-redux-form';

class LoginForm extends React.Component {
  
  handleSubmit(user) {
    // Do whatever you like in here.
    // If you connect the UserForm to the Redux store,
    // you can dispatch actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
    console.log(user.email);
  }
  render() {
    return (
      <Form
        model="user"
        onSubmit={(user) => this.handleSubmit(user)}
      >
        <label htmlFor="user.firstName">Nome:</label>
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

export default LoginForm;