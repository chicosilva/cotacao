const axios = require('axios');
const keys = require('../configs/keys');

const saveUser = data => {

  sessionStorage.setItem('token', data.token);
  return {
    type: 'NEW_USER',
    payload: data
  }

};

const receiveError = data => {
  return {
    type: 'ERROR_VALIDATION',
    payload: data
  }
}

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
          dispatch(receiveError(error.response.data.errors));

        } else if (error.request) {

          dispatch(receiveError("Ocorreu um erro, tente novamente mais tarde."));

        } else {
          dispatch(receiveError(error.message));
        }

      })

  }

}

export default newUser;