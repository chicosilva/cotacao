import {combineReducers, createStore} from "redux";
import { combineForms } from 'react-redux-form';
import reduceUser from "./users/reduce";
import initialUser from "./users/Usermodel";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const rootStore = createStore(combineReducers({
  
  users: reduceUser,
  user: combineForms({
    user: initialUser
  })

}), devTools);

export default rootStore;