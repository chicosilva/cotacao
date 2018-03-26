import {TYPES} from "../products/reduce";
const {postDataApi, getDataApi} = require("../core/actionsDataApi");

export const save = data => {

  return function (dispatch) {
    
    postDataApi(data.form_product, response => {
      dispatch({ type: TYPES.NEW, payload: data });
    });
  }

}

export const getList = () => {

  return { type: TYPES.LIST,payload: getDataApi('products')}

}