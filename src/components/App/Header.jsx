import React, { PropTypes, Component } from "react";
import "../../assets/css/App/header.css";
import ticon from "../../assets/icons/teafo.png";

class Header extends Component {
	render() {
		return(
			<header>
				<div>
					<a href="/" id="logo">
						<img src={ ticon } alt="#" />
					teafographic</a>
				</div>
				<div>
					<a href="/about">About</a>
					<a href="/blog">Blog</a>
					<a href="/index">Index</a>
					<a href="#">Login</a>
					<a href="#" className="hamburger">=</a>
				</div>
			</header>	
		);
	}
	openSidebar(){
		
	}
};

export default Header;

//need to reuse header, change the login/to logout? or maybe settings...? Or Account