import React, { PropTypes, Component } from "react";
import "../assets/css/About/about.css";
import Hero from "../components/Landing/Hero.jsx";

class About extends Component {
	
	render() {
		return(
			<div>
				<Hero/>
				<div className="about">
					<div>
						<h2>Blog</h2>
						<p></p>
					</div>
					<div>
						<h2>Team</h2>
					</div>
				</div>
			</div>
		);
	}

}

export default About;
//hero
	//h1 title: about teafographic
	//p description paragraph long about lifestyle
// team
// blog
// products and/or tea farms
