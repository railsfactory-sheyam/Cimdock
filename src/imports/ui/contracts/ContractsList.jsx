import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Link} from 'react-router';
import {PropTypes} from 'prop-types';
import {createContainer} from 'react-meteor-data';
//layout
import MainLayout from '../layouts/MainLayout.jsx';

export default class ContractsList extends React.Component{
	render(){
		return(
			<MainLayout>
			<div className="box">
			<div className="box-header with-border">
			  <h3 className="box-title">Contracts List</h3>
			  <div className="box-tools pull-right">
			  <Link to="/contracts/add" className="btn btn-info btn-flat">Add Contracts</Link>
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
			   
			</tbody>
			</table>
			</div>
			</div>
			</MainLayout>
		)
	}
}