import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Link} from 'react-router';
import {Customers} from '../../api/customers.js';
import MainLayout from '../layouts/MainLayout.jsx';
import {PropTypes} from 'prop-types';
import {createContainer} from 'react-meteor-data';

export class ViewCustomer extends React.Component{
	

	constructor(props){
		super(props);
		this.state = { currentCustomer : [] };
		var customerId = this.props.params.id;
	}
	renderViewCustomer(){
		return this.props.currentCustomer.map((viewCusData) => (
			
			<div className="box" key={viewCusData._id}>
			<div className="box-header with-border">
			  <h3 className="box-title">View Customer</h3>
			  <div className="box-tools pull-right">
			  <Link to="/customers" className="btn btn-default btn-flat">Back to List</Link>
			  </div>
			</div>
			
			  <div className="box-body">
				<table className="table table-striped">
				<tbody>
					
					<tr>
						<th>Name</th>
						<td>{viewCusData.name}</td>
					</tr>
					<tr>
						<th>Username</th>
						<td>{viewCusData.username}</td>
					</tr>
					<tr>
						<th>E-mail</th>
						<td>{viewCusData.email}</td>
					</tr>
					<tr>
						<th>Contact Number</th>
						<td>{viewCusData.contact_number}</td>
					</tr>
					<tr>
						<th>Address</th>
						<td>{viewCusData.address}</td>
					</tr>
					<tr>
						<th>Postal Code</th>
						<td>{viewCusData.postal_code}</td>
					</tr>
					<tr>
						<th>Status</th>
						<td>{viewCusData.status}</td>
					</tr>
					</tbody>
				</table>
	
			</div>
			</div>
			));
			
	}
	render(){
		var viewCusData = this.state.currentCustomer;		
		return(
			<MainLayout>{this.renderViewCustomer()}</MainLayout>
		)
	}
}

ViewCustomer.propTypes = {
	currentCustomer : PropTypes.array.isRequired,
};

export default createContainer((props)=>{
	Meteor.subscribe('customers');
	return{
		currentCustomer : Customers.find({_id: props.params.id}).fetch(),
	};
}, ViewCustomer);