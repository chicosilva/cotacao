import {combineReducers} from "redux";
import { combineForms } from 'react-redux-form';
import reduceUser from "./users/reduce";
const {budgetsReducer} = require("./budgets/reduce");
const {productsReducer} = require("./products/reduce");


const reducers = combineReducers({
  
  user: reduceUser,
  budget: budgetsReducer,
  product: productsReducer,
  form_user: combineForms({form_user: {}}),
  form_budget: combineForms({form_budget: {}}),

})

export default reducers;