import {AlertDanger, AlertSuccess} from '../core/AlertMessages';
const axios = require('axios');
const keys = require('../configs/keys')

const newUser = data => {
  
  const data_form = data.form_user;

  axios.post(keys.urlApi + '/user/new', {
    first_name: data_form.first_name,
    last_name: data_form.last_name,
    email: data_form.email,
    password: data_form.password,
  })
  .then(function (response) {
    
    console.log(response);

    AlertSuccess("Cadastro criado com sucesso!");

  })
  .catch(function (error) {
    
    if (error.response) {

      const errors = error.response.data.errors;
      
      for(var key in error.response.data.errors){
        
        AlertDanger(errors[key].msg);
      }
      
    } else if (error.request) {
        
        AlertDanger("Ocorreu um erro, tente novamente mais tarde.");
        
    } else {
        
        //AlertDanger(error.message);
    }
    console.log(error.config);
  });

  /*
  const result = axios.post(keys.urlApi + '/user/new', data);

  result.then(result => {
    
    AlertSuccess('Usuário cadastrado com sucesso!');

  }).catch(error => {
    
    AlertDanger(error.message);
    
  })
  */


  return {
    type: "NEW_USER",
    payload: {data}
  }

}

export default newUser;