import {combineReducers, createStore} from "redux";
import { combineForms } from 'react-redux-form';
import reduceUser from "./users/reduce";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const rootStore = createStore(combineReducers({
  
  user: reduceUser,
  form_user: combineForms({
    form_user: {}
  })

}), devTools);

export default rootStore;