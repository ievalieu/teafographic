import React, { PropTypes, Component } from "react";
import Header from '../components/App/Header.jsx';
import Footer from '../components/App/Footer.jsx';
// import Sidebar from '../components/Sidebar.jsx';
import "../assets/css/App/app.css";

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				{this.props.children}
				<Footer/>
			</div>
		);
	}
};

export default App;

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
