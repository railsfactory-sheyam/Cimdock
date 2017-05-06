import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import {browserHistory, Link} from 'react-router';

export default class Customer extends React.Component{

	deleteCustomer(customerID, email){
		swal({
		  title: "Are you sure?",
		  showCancelButton: true,
		  confirmButtonText: "Yes",
		  confirmButtonColor: "#ec1c02",
		  cancelButtonText: "No",
		  closeOnConfirm: true,
		  closeOnCancel: true
		},
		function(isConfirm){
		  if (isConfirm) {
			   Meteor.call('deleteUser', email, (error) => {
				if(error)
				{
					sAlert.error('Something Wrong : ' + error.reason);
				}
				else
				{

					Meteor.call('deleteCustomer', customerID, (error) => {
						if(error)
						{
							sAlert.error('Something Wrong : ' + error.reason);
						}
						else
						{
							//browserHistory.push('/customers');		
							sAlert.success('Customer Deleted');	
						}
					})
		
							
				}
			})
		  } else {
		    sAlert.warning('Cancelled');	
		  }
		});
		
	}

	render(){
		return(
			<tr key={this.props.data._id}>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.email}</td>
				<td>{this.props.data.status}</td>
				<td>
					
					<Link to={'/customers/view/'+this.props.data._id } className="btn btn-default btn-flat">
						<span className="glyphicon glyphicon-eye-open"></span>
					</Link>
					<Link to={'/customers/edit/'+this.props.data._id } className="btn btn-default btn-flat">
						<span className="glyphicon glyphicon-pencil"></span>
					</Link>
					<button className="btn btn-default btn-flat" onClick={this.deleteCustomer.bind(this,this.props.data._id,this.props.data.email)}>
						<span className="glyphicon glyphicon-trash"></span>
					</button>
					
				</td>
			</tr>
		)
	}
}