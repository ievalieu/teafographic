import React, { PropTypes, Component } from "react";

import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';
import Main from '../components/Main.jsx';
import Footer from '../components/Footer.jsx';
import Sidebar from '../components/Sidebar.jsx';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Navbar />
				<Main />
				<Sidebar />
				<Footer />
			</div>
		);
	}
};

export default App;