import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory } from 'react-router';
import {PropTypes} from 'prop-types';
import {createContainer} from 'react-meteor-data';

export  class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = { loggedUser : [] };
	}
	loggoutUser(event){
		event.preventDefault();
		Meteor.logout(function(err) {
		  if (err)
		  {
			   sAlert.error(err.reason);
		  }
		  else
		  {
		  	browserHistory.push('/login');
		  	sAlert.success('Logged Out !');
		  }
		});
	}
	renderLogger(){
		return this.props.loggedUser.map((logy) => (
			 <a href="#" key={logy._id} className="dropdown-toggle" data-toggle="dropdown">
			    <span className="hidden-xs">{logy.username}</span>
			 </a>			
			));
			
	}
	render(){
		return(
			
			<header className="main-header">

			    <a href="/" className="logo">
			      <span className="logo-mini"><b>CIM</b></span>
			      <span className="logo-lg"><b>CIM</b></span>
			    </a>


			    <nav className="navbar navbar-static-top">
			      <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
			        <span className="sr-only">Toggle navigation</span>
			      </a>
			      <div className="navbar-custom-menu">
			        <ul className="nav navbar-nav">
			          
			          <li className="dropdown">
			           {this.renderLogger()}
			            <ul className="dropdown-menu">
			              <li><a href="/" onClick={this.loggoutUser.bind(this)} >Logout</a></li>
			            </ul>
			          </li>
			        </ul>
			      </div>

			    </nav>
			  </header>		
		)
	}
}

Header.propTypes = {
	loggedUser : PropTypes.array.isRequired,
};

export default createContainer((props)=>{
	Meteor.subscribe('users');
	return{
		loggedUser : Meteor.users.find({_id: Meteor.userId()}).fetch(),
	};
}, Header);