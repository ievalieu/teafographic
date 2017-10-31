import React, { PropTypes, Component } from "react";
import "../assets/css/About/about.css";

class About extends Component {
	
	render() {
		return(
			<div className="about">
				<div className="about-hero-box">
					<h2>Teafographic Lifestyle</h2>
					<img src="#" alt="about-hero"/>
				</div>
				<div className="about-blog">
					<h2>Blog</h2>
					<p></p>
				</div>
				<div className="about-team">
					<h2>Team</h2>
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
