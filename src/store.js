import {combineReducers, createStore, applyMiddleware} from "redux";
import { combineForms } from 'react-redux-form';
import reduceUser from "./users/reduce";
import thunk from "redux-thunk";
import budgetsReducer from "./budgets/reduce";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
  
  user: reduceUser,
  budgets: budgetsReducer,
  form_user: combineForms({form_user: {}})

})

const rootStore = createStore(reducers,devTools,applyMiddleware(thunk));

export default rootStore;