import { getToken } from "../users/reduce";
import { toast } from 'react-toastify';
import { actions } from 'react-redux-form';

const axios = require('axios');
const keys = require('../configs/keys');

export const getNewDate = date => {
  return {type: "UPDATE_DATE", payload: date}
}

const saveBudget = data => {

  return [
    {type: "NEW_BUDGET",payload: data},
    getBudgetList(),
  ];

}

export const newBudget = data => {

  return function (dispatch) {

    const data_form = Object.assign({}, data.form_budget, {
      token: getToken()
    });

    return axios({
        url: `${keys.urlApi}/budgets/new/`,
        timeout: 5000,
        method: 'post',
        data: data_form,
        responseType: 'json'
      })
      .then(function (response) {

        toast.success("Cadastro efetuado com sucesso!");
        dispatch(actions.reset('form_budget'));
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

export const getBudgetList = () => {

  const request = axios.get(`${keys.urlApi}/budgets/?token=` + getToken());
  return { type: 'GET_LIST', payload: request}
  
}