import React, { PropTypes, Component } from "react";
import Hero from "../components/Landing/Hero.jsx";

class Landing extends Component {
	render() {
		return(
			<main>
				<Hero/>
				<Package-Module/>
				<Shop-Module/>
				<Blog-Module/>
				<Ad-Module/>
			</main>
		);
	}
}

export default Landing;