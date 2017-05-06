import React from 'react';
import {render} from 'react-dom';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';

export default class MainLayout extends React.Component{
	
	render(){
		return(
			<div className="wrapper">
			<Header />
			<Sidebar />
			  <div className="content-wrapper">
			    <section className="content-header">
			      <h1>
			        {this.props.heading}
			      </h1>
			    </section>
			    <section className="content">
			      {this.props.children}
			    </section>
			  </div>
			  <Footer/>
			</div>
		)
	}
}