import React, { PropTypes, Component } from "react";
import "../assets/css/About/about.css";
import Hero from "../components/Landing/Hero.jsx";

class About extends Component {
	
	render() {
		return(
			<div className="about">
				<div className="side">
					<div className="link-name">
						<h2>About Us</h2>
					</div>
					<div className="link-description">
						<p> Learn more about Teafographi Lifestyle! We're all about that zen living!</p>
					</div>
				</div>
				<div className="article">
					<div className="title-box">
						<h2>Team</h2>
					</div>
					<div className="image-box">
						<img src="#"/>
					</div>
					<div className="description-box">
						<p>Eva Lieu - Web developer</p>
						<p>Short description</p>
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
