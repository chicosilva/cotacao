import { getToken} from "../users/reduce";
import {toast} from 'react-toastify';
const axios = require('axios');
const keys = require('../configs/keys');

export const getDataApi = url => {
    return axios.get(`${keys.urlApi}/${url}/?token=` + getToken());
}

export const postDataApi = (data, callBack) => {
    
    if(data === undefined){
        toast.error("Nenhum dado foi enviado.");
        return;
    }

    return axios({
            url: `${keys.urlApi}` + data.url,
            timeout: 5000,
            method: 'post',
            data: Object.assign({}, data, {token: getToken()}),
            responseType: 'json'
        })
        .then(function (response) {
            toast.success("Cadastro efetuado com sucesso!");
            callBack(response);
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
