import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Link} from 'react-router';
import {Customers} from '../../api/customers.js';
import MainLayout from '../layouts/MainLayout.jsx';
import {PropTypes} from 'prop-types';
import {createContainer} from 'react-meteor-data';

export   class EditCustomer extends React.Component{
	constructor(props){
		super(props);
		this.state = { currentCustomer : [] };
		var customerId = this.props.params.id;
	}
	renderEditCustomer(){
		return this.props.currentCustomer.map((updateCusData) => (
			
			<div className="box" key={updateCusData._id}>
			<div className="box-header with-border">
			  <h3 className="box-title">Edit Customer</h3>
			</div>
			<form className="form-horizontal" id="editCusForm">
			  <div className="box-body">
			  <div className="row">
			  
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Name</label>
			      <div className="col-sm-9">
			        <input type="text" className="form-control required" defaultValue={updateCusData.name} ref="name" name="name"/>
			        <input type="hidden" defaultValue={updateCusData._id} ref="id" name="id"/>
			      </div>
			    </div>
			  </div>
			  </div>
			  <div className="row">
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Username</label>
			      <div className="col-sm-9">
			        <input type="text" className="form-control required" disabled ref="username" name="username" defaultValue={updateCusData.username}/>
			      </div>
			    </div>
			  </div>
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">E-mail</label>
			      <div className="col-sm-9">
			        <input type="email" className="form-control required" disabled ref="email" name="email"  defaultValue={updateCusData.email}/>
			      </div>
			    </div>
			  </div>
			  </div>
			  <div className="row">
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Password</label>
			      <div className="col-sm-9">
			        <input type="password" className="form-control" ref="password" name="password"/>
			      </div>
			    </div>
			  </div>
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Confirm Password</label>
			      <div className="col-sm-9">
			        <input type="password" className="form-control" ref="confirm_password" name="confirm_password"/>
			      </div>
			    </div>
			  </div>
			  </div>
			  <div className="row">
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Contact Number</label>
			      <div className="col-sm-9">
			        <input type="text" className="form-control required" ref="contact_number" name="contact_number"  defaultValue={updateCusData.contact_number}/>
			      </div>
			    </div>
			  </div>
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Address</label>
			      <div className="col-sm-9">
			        <textarea className="form-control required" ref="address" name="address" defaultValue={updateCusData.address}></textarea>
			      </div>
			    </div>
			  </div>
			  </div>
			  <div className="row">
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Postal Code</label>
			      <div className="col-sm-9">
			        <input type="text" className="form-control required" ref="postal_code" name="postal_code"  defaultValue={updateCusData.postal_code}/>
			      </div>
			    </div>
			  </div>
			  <div className="col-md-6">
			    <div className="form-group">
			      <label className="col-sm-3 control-label">Status</label>
			      <div className="col-sm-9">
			        <select className="form-control required" ref="status" name="status" defaultValue={updateCusData.status}>
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
			
		))
	}
	

	componentDidMount(){
		jQuery('#editCusForm').validate({
			submitHandler: function(form, event) { 
      				event.preventDefault();
					var formData = {};
					$.each($(form).serializeArray(), function (i, field) {
					    formData[field.name] = field.value;
					});

			let customer = {
				_id : formData.id,
				name : formData.name,
				//username : formData.username,
				//email : formData.email,
				contact_number : formData.contact_number,
				address : formData.address,
				postal_code : formData.postal_code,
				status : formData.status
			}

			Meteor.call('updateCustomer', customer, (error) => {
					if(error)
					{
						sAlert.error('Something Wrong : ' + error.reason);
					}
					else
					{
						browserHistory.push('/customers');
						sAlert.success('Customer Updated');	
					}
				})
			}
		});
	}

	render(){
		
		var updateCusData = this.state.currentCustomer;
		
		return(
			<MainLayout>{this.renderEditCustomer()}</MainLayout>
		)
	}
}

EditCustomer.propTypes = {
	currentCustomer : PropTypes.array.isRequired,
};

export default createContainer((props)=>{
	Meteor.subscribe('customers');
	return{
		currentCustomer : Customers.find({_id: props.params.id}).fetch(),
	};
}, EditCustomer);