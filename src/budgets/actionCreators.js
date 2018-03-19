import {getToken} from "../users/reduce";
const axios = require('axios');
const keys = require('../configs/keys');

const receiveError = data => {
  return { type: 'ERROR_LOAD_DATA', payload: data }
};

const saveBudget = data => {

  return {
    type: "NEW_BUDGET",
    payload: data 
  }
}

export const newBudget = data => {

  return function (dispatch) {

    return axios({
        url: `${keys.urlApi}/budget/new/?token=`+ getToken(),
        timeout: 5000,
        method: 'post',
        data: data.form_user,
        responseType: 'json'
      })
      .then(function (response) {

        dispatch(saveBudget(response.data));

      })
      .catch(function (error) {

        if (error.response) {
          dispatch(receiveError(error.response.data.errors));

        } else if (error.request) {

          dispatch(receiveError("Ocorreu um erro, tente novamente mais tarde."));

        } else {
          dispatch(receiveError(error.message));
        }

      })

  }

}

export const updateList = data => {

  return function (dispatch) {

    return axios({
        url: `${keys.urlApi}/budgets/?token=` + getToken(),
        timeout: 5000,
        method: 'get',
        responseType: 'json'
      })
      .then(function (response) {
        
        dispatch({ type: 'UPDATE_LIST', payload: response.data.budgets });
      })
      .catch(function (error) {
        
        dispatch(receiveError("Ocorreu um erro, tente novamente mais tarde."));
      });

  }

}