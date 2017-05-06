import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Link} from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Login extends React.Component{
	componentWillMount() {
		jQuery( "body" ).removeClass( 'skin-blue sidebar-mini' );
	    jQuery( "body" ).addClass( 'login-page' ); 
	  }
	componentWillUnmount() {	   
	    jQuery( "body" ).removeClass( 'login-page' );
		jQuery( "body" ).addClass( 'skin-blue sidebar-mini' );
	  }
	componentDidMount(){

		jQuery('#loginForm').validate({
			submitHandler: function(form, event) { 
      				event.preventDefault();
					var formData = {};
					$.each($(form).serializeArray(), function (i, field) {
					    formData[field.name] = field.value;
					});
					

					Meteor.loginWithPassword(formData.username, formData.password, function(err) {
					  if (err)
					  {
						   sAlert.error(err.reason);
					  }
					  else
					  {
					  	browserHistory.push('/');
					  	var msg = 'Welcome ' + Meteor.user().username + '!';
					  	sAlert.success(msg);
					  }
					});
			}
		});
	}

	render(){
		return(
			<div className="login-box">
			  <div className="login-logo">
			    <a href="#"><b>CIM</b></a>
			  </div>
			  <div className="login-box-body">
			    <p className="login-box-msg"></p>
			    <form  id="loginForm" method="POST">
			      <div className="form-group">
			        <input type="text" className="form-control required" placeholder="Username" name="username" ref="username"/>
			      </div>
			      <div className="form-group">
			        <input type="password" className="form-control required" placeholder="Password" name="password" ref="password"/>
			      </div>
			      <div className="form-group">
			          <button type="submit" className="btn btn-primary btn-block btn-flat">Login</button>
			      </div>
			    </form> 
			  </div>
			</div>
		)
	}
}