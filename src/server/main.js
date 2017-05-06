import { Meteor } from 'meteor/meteor';
import {Customers} from '../imports/api/customers.js';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('customers', function () {
  	return Customers.find({});
  })
});
