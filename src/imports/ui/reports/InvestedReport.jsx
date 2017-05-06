import React from 'react';
import {render} from 'react-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import {Router, Route, browserHistory , Link} from 'react-router';

export default class InvestedReport extends React.Component{
	
	render(){
		
		return(
			<MainLayout heading="Invested Report">
			</MainLayout>
		)
	}
}