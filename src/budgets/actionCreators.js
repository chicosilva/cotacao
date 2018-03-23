import {getToken} from "../users/reduce";
import { toast } from 'react-toastify';

const axios = require('axios');
const keys = require('../configs/keys');

export const getNewDate = date => {
  
  updateDate(date);
  return date;
}

export const updateDate = date => {
  
  return {
    type: "UPDATE_DATE",
    payload: date
  }
  
}

const saveBudget = data => {

  return {
    type: "NEW_BUDGET",
    payload: data 
  }

}

export const newBudget = data => {

  return function (dispatch) {
    
    const data_form = Object.assign({}, data.form_budget, {token: getToken()});

    return axios({
        url: `${keys.urlApi}/budgets/new/`,
        timeout: 5000,
        method: 'post',
        data: data_form,
        responseType: 'json'
      })
      .then(function (response) {

        toast.success("Cadastro efetuado com sucesso!");
        dispatch(saveBudget(response.data));

      })
      .catch(function (error) {
        
        if (error.response) {
          
          const errors = error.response.data.errors;

          for (var key in errors) {
            toast.error(errors[key].msg);
          }

        } else if (error.request) {
          
          toast.error("Ocorreu um erro ao tentar cadastrar, tente novamente");

        } else {
          
          toast.error(error.message);
        }

      });

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

        toast.error("Ocorreu um erro, tente novamente mais tarde.");
      });

  }

}