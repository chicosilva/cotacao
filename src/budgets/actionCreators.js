import {TYPES} from "../budgets/reduce";
const {postDataApi, getDataApi} = require("../core/actionsDataApi");

export const getNewDate = date => {
  return { type: TYPES.UPDATE_DATE, payload: date}
}

export const save = data => {
  
  return function (dispatch) {
    
    postDataApi(data.form_budget, response => {
      dispatch({ type: TYPES.NEW, payload: data });
    });
  }

}

export const getList = () => {

  return { type: TYPES.LIST,payload: getDataApi('budgets') }

}