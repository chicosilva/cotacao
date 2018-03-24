import React from "react";


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
                    <th>Produto</th>
                    <th className="col-md-2">Quantidade</th>
                    <th className="col-md-3">* Valor desejado</th>
                    <th>* Última cotação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                        <select className="form-control">
                            <option>Canetas de tinta branca</option>
                        </select>
                    </td>
                    <td>
                        <input type="number" className="form-control" />
                    </td>
                    <td>
                        <input type="text" className="form-control" />
                    </td>
                    <td>
                        R$ 10,00
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

export default ItemList;