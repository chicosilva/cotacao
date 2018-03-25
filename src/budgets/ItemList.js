import React from "react";
import {connect} from "react-redux";


class ItemList extends React.Component{

    render(){
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
                  <tr>
                    <td>
                        <div className="col-md-9">
                          <select className="form-control">
                              <option>Canetas de tinta branca</option>
                          </select>
                        </div>
                        <div className="col-md-2">
                          <a href="" className="btn btn-success"> 
                            <i className="px-nav-icon ion-plus-round"></i>
                          </a>
                        </div>

                    </td>
                    <td>
                        <input type="number" className="form-control" />
                    </td>
                    <td>
                        <input type="text" className="form-control" />
                    </td>
                    <td>
                        R$ 10,00 (uni)
                    </td>
                  </tr>
                 
                </tbody>
              </table>
              <div className="table-footer">
                Total: R$ 190.00
              </div>
              
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    products: state.product.list
  }
}

export default connect(mapStateToProps)(ItemList)

