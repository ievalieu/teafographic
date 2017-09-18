import React, { PropTypes, Component } from "react";
import "../assets/css/header.css";

class Header extends Component {
	render() {
		return(
			<nav>
				<div className="nav-wrapper">
					<a href="#" id="logo">TEAFOGRAPHIC</a>
					<a href="#">About</a>
					<a href="#">Blog</a>
					<a href="#">Login</a>
					<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
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
// style="text-align: left; font-family: 'Abel', sans-serif; font-size: 30px"


//SITE MAP
/*
1. Landing
	Hero(subscribe, features), Packages, Shop, Blog, Pre-footer Hero, Footer 
2. Login/Sign up: Modal
3. Quizzes: Modal
4. Packages: 1, 2, 3, 4
5. Shop Catalog
6. Cart Page, modal
7. Blog
8. Generic Info Pages from Footer: Disclaimer, About, Jobs
9. Support FAQ
10. Contact Modal
11. Connect sidebar
*/
//