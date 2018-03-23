import React from 'react';
import { Control, Errors, Field } from 'react-redux-form';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {updateDate} from './actionCreators';
import {Redirect} from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

class DatePickerField extends React.Component {
    
  handleChange(date) {    
    this.props.updateDate(date);
  }

  render() {
    
    const today = new Date();

    return (
      <DatePicker
            placeholder="DD/MM/YYYY"
            disabledDays={{before: today}}
            isClearable={true}
            name="form_budget.date_limit" 
            dateFormat="DD/MM/YYYY" 
            selected={this.props.start_date} 
            onChange={data => this.handleChange(data)} 
            className="form-control" />
      
    );
  }
}

const mapStateToProps = function (state){

  return {
    start_date: state.budget.start_date,
  }
}

const mapDispatchtoProps = dispatch => {
  return bindActionCreators({updateDate}, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(DatePickerField)