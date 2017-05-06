import {Mongo} from "meteor/mongo";

export const Customers = new Mongo.Collection('customers');

Customers.allow({
	insert(){ return false; },
	update(){ return false; },
	remove(){ return false; }
});

Customers.deny({
	insert(){ return true; },
	update(){ return true; },
	remove(){ return true; }
});

const CustomerSchema = new SimpleSchema({
	_id :{type:String},
	//customer_id : {type:String},
	name : {type:String},
	username : {type:String},
	email : {type:String},
	contact_number : {type:String},
	address : {type:String},
	postal_code : {type:String},
	status : {type:String}
});

Customers.attachSchema(CustomerSchema);