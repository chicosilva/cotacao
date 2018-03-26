import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {save} from "./actionCreators";
import {Control, Errors} from "react-redux-form";

class FormItem extends React.Component{
  
  render(){
    
    const list = this.props.itens_list || [];
    
    if(list.length === 0){
        return null;
    }
    
    return(
        
        <tr>
              <td>
                <div className="col-md-10">

                  <Control.select model=".product" required className="form-control">
                    <option value="">Escolha um produto:</option>
                    { 
                      list.map(function(item, index) {
                        return <option key={index} value={item._id}>{item.name}</option>
                      })
                    }
                  </Control.select>
                  
                </div>
                
                <div className="col-md-2">
                  <a href="" className="btn btn-success"> + </a>
                </div>

            </td>
            <td>
                
                <Control.text model=".qtd" defaultValue="1" className="form-control" required />
                
                <Errors
                    className="required"
                    model=".qtd"
                    show="touched"
                    messages={{
                      valueMissing: 'Campo obrigatório',
                      typeMismatch: 'Campo obrigatório',
                    }}
                />

            </td>
            <td>
                <Control.text model=".wanted_price" className="form-control" />
            </td>
            <td>
                R$ 10,00 (uni)
            </td>
        </tr>
      

    )
  }

}

class ItemList extends React.Component{

    render(){

        const {products} = this.props;
        
        return(
            <div className="table-light">
              
              <div className="table-header">
                <div className="table-caption">
                  Informe o(s) produto(s) que deseja cotar:
                </div>
              </div>
              
              <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="col-md-5"> Produto </th>
                      <th className="col-md-1"> Quantidade </th>
                      <th className="col-md-2"> Valor desejado </th>
                      <th className="col-md-2"> Última cotação </th>
                    </tr>
                  </thead>
                  <tbody>
                      <FormItem itens_list={products} />
                  </tbody>
              </table>

              <div className="table-footer">
                Total: R$ 190.00
              </div>
              
            </div>
        )
    }
}

const mapDispatchtoProps = dispatch => {
  return bindActionCreators({save}, dispatch)
}

export default connect(null, mapDispatchtoProps)(ItemList);