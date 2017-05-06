import React from 'react';
import {render} from 'react-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import {Router, Route, browserHistory , Link} from 'react-router';
import {Customers} from '../../api/customers.js';

export default class Dashboard extends React.Component{
	
	render(){
		
		return(
			<MainLayout heading="Dashboard">
			<div className="row">
			
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
			    <div className="info-box">
	            <span className="info-box-icon bg-aqua">
	            <i className="fa fa-credit-card-alt"></i>
	            </span>
	            <div className="info-box-content">
	            <span className="info-box-text">Invested Amount</span>
	            <span className="info-box-number">5,67,334</span>
	            </div>
          		</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
			    <div className="info-box">
	            <span className="info-box-icon bg-aqua">
	            <i className="fa fa-money"></i>
	            </span>
	            <div className="info-box-content">
	            <span className="info-box-text">Payout Amount</span>
	            <span className="info-box-number">57,334</span>
	            </div>
          		</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
			    <div className="info-box">
	            <span className="info-box-icon bg-aqua">
	            <i className="fa fa-users"></i>
	            </span>
	            <div className="info-box-content">
	            <span className="info-box-text">Customers</span>
	            <span className="info-box-number">159</span>
	            </div>
          		</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
			    <div className="info-box">
	            <span className="info-box-icon bg-aqua">
	            <i className="fa fa-compress"></i>
	            </span>
	            <div className="info-box-content">
	            <span className="info-box-text">Contracts</span>
	            <span className="info-box-number">778</span>
	            </div>
          		</div>
			</div>
			</div>
			</MainLayout>
		)
	}
}