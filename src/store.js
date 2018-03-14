import {combineReducers, createStore} from "redux";
import { combineForms } from 'react-redux-form';
import reduceUser from "./users/reduce";
import initialUser from "./users/Usermodel";

const rootStore = createStore(combineReducers({
  
  field: reduceUser,
  users: () => ({nomes: ['francisco', 'fábio', 'célio']}),
  user: combineForms({
    user: initialUser
  })

}));

export default rootStore;