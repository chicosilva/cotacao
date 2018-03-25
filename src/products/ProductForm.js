import React from 'react';
import { Control, Form, Errors, actions } from 'react-redux-form';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {newProduct} from './actionCreators';
import {Redirect} from "react-router-dom";
import {reduxForm} from "redux-form";

class ProductForm extends React.Component {
  
  handleSubmit(data) {
    this.props.newProduct(data);
  }

  render() {
    
    const {dispatch, getNewDate} = this.props;
    
    dispatch( actions.focus('form_product.name'));

    if(this.props.success){
      return <Redirect to="/products" />
    }
    const today = new Date();
    return (
      <div>
        
        <div className="col-md-4">

            <Form model="form_product" onSubmit={data => this.handleSubmit(data)}> 

              <div className="form-group">
                <label htmlFor="form_product.name">Assunto do e-mail: <span className="required">*</span></label>
                
                <Control.text model="form_product.name" id="name" className="form-control" required />
                
                <Errors
                    className="required"
                    model="form_product.name"
                    show="touched"
                    messages={{
                      valueMissing: 'Campo obrigatório',
                      typeMismatch: 'Campo obrigatório',
                    }}
                />
              </div>
                
              </div>
              <hr />
              <button type="submit" className="btn btn-primary">
                Próximo passo
              </button>

            </Form>
            
        </div>

      </div>
      
    );
  }
}

const mapStateToProps = function (state){

  return {
    success: state.product.success,
    error: state.product.error,
  }
}

const mapDispatchtoProps = dispatch => {
  
  return bindActionCreators({newProduct}, dispatch)
}

ProductForm = reduxForm({form: 'ProductForm', destroyOnUnmount: false})(ProductForm);

export default connect(mapStateToProps, mapDispatchtoProps)(ProductForm)