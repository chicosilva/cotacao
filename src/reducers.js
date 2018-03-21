import {combineReducers} from "redux";
import { combineForms } from 'react-redux-form';
import reduceUser from "./users/reduce";
import budgetsReducer from "./budgets/reduce";

const reducers = combineReducers({
  
  user: reduceUser,
  budget: budgetsReducer,
  form_user: combineForms({form_user: {}}),
  form_budget: combineForms({form_budget: {}}),

})

export default reducers;