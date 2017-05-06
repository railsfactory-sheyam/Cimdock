import React from 'react';
import {render} from 'react-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import {Router, Route, browserHistory , Link} from 'react-router';

export default class AddContract extends React.Component{
	
	render(){
		
		return(
			<MainLayout heading="Add Contract">
			</MainLayout>
		)
	}
}