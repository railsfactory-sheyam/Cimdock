import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory } from 'react-router';
import App from '../imports/ui/App.jsx';
import Login from '../imports/ui/Login.jsx';
import Lost from '../imports/ui/Lost.jsx';
import CustomersList from '../imports/ui/customers/CustomersList.jsx';
import NewCustomer from '../imports/ui/customers/NewCustomer.jsx';
import EditCustomer from '../imports/ui/customers/EditCustomer.jsx';
import ViewCustomer from '../imports/ui/customers/ViewCustomer.jsx';
import ContractsList from '../imports/ui/contracts/ContractsList.jsx';
import AddContract from '../imports/ui/contracts/AddContract.jsx';
import InvestContract from '../imports/ui/contracts/InvestContract.jsx';
import Calendar from '../imports/ui/calendar/calendar.jsx';
import Enquiries from '../imports/ui/enquiries/Enquiries.jsx';
import InvestedReport from '../imports/ui/reports/InvestedReport.jsx';
import PayoutReport from '../imports/ui/reports/PayoutReport.jsx';

Meteor.startup(() => {

	function Logged(){
		 if(Meteor.loggingIn() && Meteor.userId()) 
		{
			browserHistory.push('/');
		}
		else
		{
			browserHistory.push('/login');
		}
		
	}

	function NotLogged(){
		if(!Meteor.loggingIn() && !Meteor.userId()) 
		{
			browserHistory.push('/login');
		}
		else
		{
			browserHistory.push('/');
		}
	}

	render((
		<Router history={browserHistory}>
			<Route path="/" component={App} onEnter={Logged()}/>
			<Route path="/login" component={Login} onEnter={NotLogged()}/>
			<Route path="/customers" component={CustomersList} onEnter={Logged()}/>
			<Route path="/customers/add" component={NewCustomer} onEnter={Logged()}/>
			<Route path="/customers/edit/:id" component={EditCustomer} onEnter={Logged()}/>
			<Route path="/customers/view/:id" component={ViewCustomer} onEnter={Logged()}/>
			<Route path="/contracts" component={ContractsList} onEnter={Logged()}/>
			<Route path="/contracts/add" component={AddContract} onEnter={Logged()}/>
			<Route path="/contracts/invest" component={InvestContract} onEnter={Logged()}/>
			<Route path="/calendar" component={Calendar} onEnter={Logged()}/>
			<Route path="/enquiries" component={Enquiries} onEnter={Logged()}/>
			<Route path="/reports/invested-reports" component={InvestedReport} onEnter={Logged()}/>
			<Route path="/reports/payout-reports" component={PayoutReport} onEnter={Logged()}/>
			<Route path="*" component={Lost} />
		</Router>
	), document.getElementById('render-target'));

	//add class to body tag
	$('body').addClass('hold-transition skin-blue sidebar-mini');
	//add extra scripts
	$.getScript('/plugins/slimScroll/jquery.slimscroll.min.js');
	$.getScript('/plugins/fastclick/fastclick.js');
	$.getScript('/dist/js/app.min.js');

	//alert message
	sAlert.config({
        effect: 'stackslide',
        position: 'top-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0,
        beep: false,
        onClose: _.noop
    });



	
    
});
