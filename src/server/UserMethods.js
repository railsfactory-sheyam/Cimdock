import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
	createAdminUser(user) {	    
	    var userId = Accounts.createUser({
	    		username: user.username, 
	    		email: user.email, 
	    		password: user.password
	    	});
	    Roles.addUsersToRoles(userId, ['admin']);
	},
	createCustomerUser(user) {	    
	    var userId = Accounts.createUser({
	    		username: user.username, 
	    		email: user.email, 
	    		password: user.password
	    	});
	    Roles.addUsersToRoles(userId, ['customer']);
	},
	deleteUser(email){
		var user = Accounts.findUserByEmail(email);
		console.log(user);
		Meteor.users.remove({_id : user._id});
	}
	
})