import {
  AlertDanger,
  AlertSuccess
} from '../core/AlertMessages';
const axios = require('axios');
const keys = require('../configs/keys');

const newUser = data => {

  const data_form = data.form_user;

  axios.post(
      keys.urlApi + '/user/new',
      data_form
    )
    .then(function (response) {

      localStorage.setItem('token', response.token);
      AlertSuccess("Cadastro criado com sucesso!");

    })
    .catch(function (error) {

      if (error.response) {

        const errors = error.response.data.errors;

        for (var key in error.response.data.errors) {
          AlertDanger(errors[key].msg);
        }

      } else if (error.request) {

        AlertDanger("Ocorreu um erro, tente novamente mais tarde.");

      } else {

        AlertDanger(error.message);
      }

    });
  
  return {
    type: "NEW_USER",
    payload: {data}
  }

}

export default newUser;