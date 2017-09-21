import React, { PropTypes, Component } from "react";
import "../../assets/css/App/header.css";

class Header extends Component {
	render() {
		return(
			<nav>
				<div className="nav-wrapper">
					<a href="/" id="logo">TEAFOGRAPHIC</a>
					<a href="/about">About</a>
					<a href="/blog">Blog</a>
					<a href="#">Login</a>
					<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
				</div>
			</nav>	
		);
	}
};

export default Header;