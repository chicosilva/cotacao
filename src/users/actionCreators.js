import { toast } from 'react-toastify';

const axios = require('axios');
const keys = require('../configs/keys');

const saveUser = data => {

  sessionStorage.setItem('token', data.token);
  return {
    type: 'NEW_USER',
    payload: data
  }

};

const newUser = data => {

  sessionStorage.setItem('token', '');

  return function (dispatch) {

    return axios({
        url: `${keys.urlApi}/user/new`,
        timeout: 5000,
        method: 'post',
        data: data.form_user,
        responseType: 'json'
      })
      .then(function (response) {

        dispatch(saveUser(response.data));

      })
      .catch(function (error) {

        if (error.response) {
          const errors = error.response.data.errors;

          for (var key in errors) {
            toast.error(errors[key].msg);
          }

        } else if (error.request) {

          toast.error("Ocorreu um erro, tente novamente mais tarde.");

        } else {
          
          toast.error(error.message);
        }

      })

  }

}

export default newUser;