import React, { PropTypes, Component } from "react";
import Hero from "../components/Landing/Hero.jsx";

class Landing extends Component {
	render() {
		return(
			<main>
				<Hero/>
				<div>Packages Module</div>
				<div>Shop Module</div>
				<div>Blog Module</div>
				<div>Advertisement Module</div>
			</main>
		);
	}
}

export default Landing;