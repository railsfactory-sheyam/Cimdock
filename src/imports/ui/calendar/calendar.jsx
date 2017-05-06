import React from 'react';
import {render} from 'react-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import {Router, Route, browserHistory , Link} from 'react-router';

export default class Calendar extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		jQuery('#calendar').fullCalendar();
	}
	
	render(){
		return(
				<MainLayout heading="Calendar">
					<div className="row">
						<div className="col-md-12">
							<div className="box box-primary">
								<div className="box-body no-padding">
									<div id="calendar"></div>
								</div>
							</div>
						</div>
					</div>
				</MainLayout>
		)
	}
}