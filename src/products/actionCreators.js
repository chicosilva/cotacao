import { getToken } from "../users/reduce";
import { toast } from 'react-toastify';
import { actions } from 'react-redux-form';

const axios = require('axios');
const keys = require('../configs/keys');

const save = data => {

  return [
    {type: "NEW_PRODUCT", payload: data},
    getProductList(),
  ];

}

export const newProduct = data => {

  return function (dispatch) {

    const data_form = Object.assign({}, data.form_product, {
      token: getToken()
    });

    return axios({
        url: `${keys.urlApi}/products/new/`,
        timeout: 5000,
        method: 'post',
        data: data_form,
        responseType: 'json'
      })
      .then(function (response) {

        toast.success("Cadastro efetuado com sucesso!");
        dispatch(actions.reset('form_product'));
        dispatch(save(response.data));

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

export const getProductList = () => {

  const request = axios.get(`${keys.urlApi}/products/?token=` + getToken());
  return { type: 'GET_PRODUCT_LIST', payload: request}
  
}