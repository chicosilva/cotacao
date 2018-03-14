import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import changeValue from "../users/actionCreators";


class Footer extends Component{

    componentDidMount(){
      
    }
    render(){

        return(
          <footer className="px-footer px-footer-bottom p-t-0">
            
            <div className="box m-a-0 bg-transparent">
              <div className="box-cell col-md-3 p-t-3 valign-middle">
              <h3>{this.props.value}</h3>
              <input onChange={this.props.changeValue} value={this.props.value} />
              </div>
            </div>
            
            <hr className="page-wide-block" />
            <span className="text-muted">Copyright © 2017 PixelAdmin LLC. All rights reserved.</span>
          </footer>
        );
    }
}

const mapStateToProp = state => {
   return {
     value: state.field.value
   }
}
const mapDispatchProps = dispatch => {
  return bindActionCreators({changeValue}, dispatch);
}


export default connect(mapStateToProp, mapDispatchProps)(Footer)
