import { Meteor } from 'meteor/meteor';
import {Customers} from '../imports/api/customers.js';

Meteor.methods({
	insertCustomer(customer){
		Customers.insert(customer);
	},

	updateCustomer(customer){
		Customers.update(customer._id, { $set:customer });
	},

	deleteCustomer(customerID){
		Customers.remove(customerID);
	}
})