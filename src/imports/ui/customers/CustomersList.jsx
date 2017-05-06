import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Link} from 'react-router';
import Customer from './Customer.jsx';
import {PropTypes} from 'prop-types';
import {createContainer} from 'react-meteor-data';
//layout
import MainLayout from '../layouts/MainLayout.jsx';
//data
import {Customers} from '../../api/customers.js';


export  class CustomersList extends React.Component{

	constructor(props){
		super(props);
		this.state = { customers : [] };
	}
	
	renderCustomers(){
		return this.props.customers.map((customerData) => (
			 <Customer key={customerData._id} data={customerData}/>
		))
	}
	render(){
		return(
			<MainLayout>
			<div className="box">
			<div className="box-header with-border">
			  <h3 className="box-title">Customers List</h3>
			  <div className="box-tools pull-right">
			  <Link to="/customers/add" className="btn btn-info btn-flat">Add Customer</Link>
			  </div>
			</div>
			<div className="box-body">
			<table className="table table-hover DataTable">
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Status</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
			   {this.renderCustomers()}
			</tbody>
			</table>
			</div>
			</div>
			</MainLayout>
		)
	}
}

CustomersList.propTypes = {
	customers : PropTypes.array.isRequired,
};

export default createContainer(()=>{
	Meteor.subscribe('customers');
	return{
		customers : Customers.find({}, {sort:{ name : 1 }}).fetch(),
	};
}, CustomersList);
