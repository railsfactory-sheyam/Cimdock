import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Link} from 'react-router';

export default class Sidebar extends React.Component{
	render(){
		return(
			
			 <aside className="main-sidebar">   
			    <section className="sidebar">	     
			     
			      <ul className="sidebar-menu">
			        <li className="header">MAIN NAVIGATION</li>
			        
			        <li>			        
			           <Link to="/"><i className="fa fa-home"></i> <span>Dashboard</span></Link>
			        </li>
			        <li className="treeview">
			          <a href="#">
			            <i className="fa fa-compress"></i>
			            <span>Customer Managment</span>
			            <span className="pull-right-container">
			              <i className="fa fa-angle-left pull-right"></i>
			            </span>
			          </a>
			          <ul className="treeview-menu">
			            <li><Link to="/customers"><i className="fa fa-list-ul"></i>List</Link></li>
			            <li><Link to="/customers/add"><i className="fa fa-plus"></i>Add</Link></li>
			          </ul>
			        </li>
			        <li className="treeview">
			          <a href="#">
			            <i className="fa fa-users"></i>
			            <span>Contract Managment</span>
			            <span className="pull-right-container">
			              <i className="fa fa-angle-left pull-right"></i>
			            </span>
			          </a>
			          <ul className="treeview-menu">
			            <li><Link to="/contracts"><i className="fa fa-list-ul"></i>List</Link></li>
			            <li><Link to="/contracts/add"><i className="fa fa-plus"></i>Add</Link></li>
			            <li><Link to="/contracts/invest"><i className="fa fa-usd"></i>Invest Contracts</Link></li>
			          </ul>
			        </li>
			        <li>			        
			           <Link to="/calendar"><i className="fa fa-calendar"></i> <span>Calendar</span></Link>
			        </li>
			         <li>			        
			           <Link to="/enquiries"><i className="fa fa-envelope-o"></i> <span>Enquiries Management</span></Link>
			        </li>
			        <li className="treeview">
			          <a href="#">
			            <i className="fa fa-bar-chart"></i>
			            <span>Reports</span>
			            <span className="pull-right-container">
			              <i className="fa fa-angle-left pull-right"></i>
			            </span>
			          </a>
			          <ul className="treeview-menu">
			            <li><Link to="/reports/invested-reports"><i className="fa fa-credit-card-alt"></i> Invested Report</Link></li>
			            <li><Link to="/reports/payout-reports"><i className="fa fa-money"></i> Payout Report</Link></li>
			          </ul>
			        </li>
	
			      </ul>
			    </section>
			  </aside>
			
		)
	}
}