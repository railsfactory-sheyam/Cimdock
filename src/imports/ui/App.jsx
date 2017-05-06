import React from 'react';
import {render} from 'react-dom';

import Dashboard from './dashboard/Dashboard.jsx';

export default class App extends React.Component{

	
	render(){
		return(
			<div className="wrapper">
			<Dashboard />
			</div>
		)
	}
}