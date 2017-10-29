import React, { PropTypes, Component } from "react";
import "../../assets/css/App/header.css";

class Header extends Component {
	render() {
		return(
			<header>
				<div>
					<a href="/" id="logo">teafographic</a>
				</div>
				<div>
					<a href="/about">About</a>
					<a href="/blog">Blog</a>
					<a href="/encyclopedia">Encyclopedia</a>
					<a href="#">Login</a>
				</div>
			</header>	
		);
	}
};

export default Header;