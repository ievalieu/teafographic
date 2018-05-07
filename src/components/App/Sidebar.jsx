import React, { PropTypes, Component } from "react";
import "../../assets/css/App/sidebar.css";

class Sidebar extends Component {
	render() {
		return(
			<div className="sidebar" id="sidebar">
				<div className="cat">
					<a href="/about">About</a>
					<a href="/blog">Blog</a>
					<a href="/index">Index</a>
					<a href="#">Login</a>
				</div>
			</div>
		);
	}
};

export default Sidebar;