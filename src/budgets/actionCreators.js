import {TYPES} from "../budgets/reduce";
const {postDataApi, getDataApi} = require("../core/actionsDataApi");


export const getNewDate = date => {
  return { type: TYPES.UPDATE_DATE, payload: date}
}

const save = data => {
  
  return [{ type: TYPES.NEW, payload: data },
    getList()
  ]

}

export const newBudget = data => {

  return function (dispatch) {
    
    postDataApi(data.form_budget, response => {
      dispatch(save(response.data));
    });
  }

}

export const getList = () => {

  return { type: TYPES.LIST,payload: getDataApi('budgets') }

}