import React, { PropTypes, Component } from "react";

class Header extends Component {
	render() {
		return(
			<nav className="black">
				<div className="nav-wrapper">
					<a href="#" className="brand-logo center">TEA ENCYCLOPEDIA</a>
					<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
					
					<ul className="left hide-on-med-and-down">
						<li><a href="sass.html">Tea</a></li>
						<li><a href="badges.html">Herbs</a></li>
						<li><a href="collapsible.html">About</a></li>
					</ul>
					
					<ul className="side-nav" id="mobile-demo">
						<li><a href="sass.html">Tea</a></li>
						<li><a href="badges.html">Herbs</a></li>
						<li><a href="collapsible.html">About</a></li>
					</ul>
				</div>
			</nav>	
		);
	}
};

export default Header;
// style="font-family: 'Lato', sans-serif; font-weight: 200"
// style="font-family: 'Lato', sans-serif; font-weight: 200"
// style="font-family: 'Lato', sans-serif; font-weight: 200"
// style="font-family: 'Lato', sans-serif; font-weight: 200"