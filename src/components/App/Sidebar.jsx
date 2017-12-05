import React, { PropTypes, Component } from "react";
import "../../assets/css/App/sidebar.css";

class Sidebar extends Component {
	render() {
		return(
			<div className="sidebar" id="sidebar">
				<div className="sidebar-header" id="logo">teafographic</div>
				<div><a href="/about">About</a></div>
				<div><a href="/blog">Blog</a></div>
				<div><a href="/index">Index</a></div>
				<div><a href="#">Login</a></div>
			</div>
		);
	}
};

export default Sidebar;