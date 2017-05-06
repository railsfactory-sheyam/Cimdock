import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Link} from 'react-router';
import {Customers} from '../../api/customers.js';
import MainLayout from '../layouts/MainLayout.jsx';

export default class NewCustomer extends React.Component{
	componentDidMount(){
		jQuery('#newCusForm').validate({
			submitHandler: function(form, event) { 
      				event.preventDefault();
					var formData = {};
					$.each($(form).serializeArray(), function (i, field) {
					    formData[field.name] = field.value;
					});
					

					var customer = {
							//customer_id : formData.customer_id.value,
							name : formData.name,
							username : formData.username,
							email : formData.email,
							contact_number : formData.contact_number,
							address : formData.address,
							postal_code : formData.postal_code,
							status : formData.status
					}
					var user = {
							username : formData.username,
							password : formData.password,
							email : formData.email
					}
					Meteor.call('createCustomerUser', user, (error) => {
						if(error)
						{
							sAlert.error('Something Wrong : ' + error.reason);
						}
						else
						{
							Meteor.call('insertCustomer', customer, (error) => {
								if(error)
								{
									sAlert.error('Something Wrong : ' + error.reason);
								}
								else
								{
									browserHistory.push('/customers');	
									sAlert.success('Customer added');	
								}
							});
						}
					});
			}
		});
	}
	

	render(){
		return(
			<MainLayout>
			<div className="box">
			<div className="box-header with-border">
			  <h3 className="box-title">Add Customer</h3>
			</div>
			<form className="form-horizontal" id="newCusForm">
			  <div className="box-body">
			  <div className="row">
			  
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Name</label>
			      <div className="col-sm-9">
			        <input type="text" className="form-control required" ref="name" name="name"/>
			      </div>
			    </div>
			  </div>
			  </div>
			  <div className="row">
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Username</label>
			      <div className="col-sm-9">
			        <input type="text" className="form-control required" ref="username" name="username"/>
			      </div>
			    </div>
			  </div>
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">E-mail</label>
			      <div className="col-sm-9">
			        <input type="email" className="form-control required" ref="email" name="email"/>
			      </div>
			    </div>
			  </div>
			  </div>
			  <div className="row">
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Password</label>
			      <div className="col-sm-9">
			        <input type="password" className="form-control required" ref="password" name="password"/>
			      </div>
			    </div>
			  </div>
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Confirm Password</label>
			      <div className="col-sm-9">
			        <input type="password" className="form-control required" ref="confirm_password" name="confirm_password"/>
			      </div>
			    </div>
			  </div>
			  </div>
			  <div className="row">
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Contact Number</label>
			      <div className="col-sm-9">
			        <input type="number" className="form-control required" ref="contact_number" name="contact_number"/>
			      </div>
			    </div>
			  </div>
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Address</label>
			      <div className="col-sm-9">
			        <textarea className="form-control required" ref="address" name="address"></textarea>
			      </div>
			    </div>
			  </div>
			  </div>
			  <div className="row">
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Postal Code</label>
			      <div className="col-sm-9">
			        <input type="number" className="form-control required" ref="postal_code" name="postal_code"/>
			      </div>
			    </div>
			  </div>
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Status</label>
			      <div className="col-sm-9">
			        <select className="form-control required" ref="status" name="status">
			        	<option className="active">Active</option>
			        	<option className="in-active">In-Active</option>
			        </select>
			      </div>
			    </div>
			  </div>
			  </div>
			  
			  
			  </div>
			  <div className="box-footer">
			  <div className="pull-right">
			    <Link to="/customers" className="btn btn-default btn-flat">Cancel</Link>
			    <button type="submit" className="btn btn-info  btn-flat">Save</button>
			  </div>
			  </div>
			</form>
			</div>
			</MainLayout>
		)
	}
}