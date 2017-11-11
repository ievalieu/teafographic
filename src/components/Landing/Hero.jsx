import React, { PropTypes, Component } from "react";
import "../../assets/css/Landing/hero.css";

class Hero extends Component {

	render() {
		return(
			<div className="hero">
				<img src="#" alt="#" />
				<h1>Custom Tea Subscription</h1>
				<p>Tea infographics, your minimal lifestyle centered around the perfect cup of tea.</p>
				<button>SUBSCRIBE</button>
			</div>
		);
	}
};

export default Hero;

//slider images? button?
// Hero should be reuseable. 

//reuse of hero for: blog, landing, about, encyclopedia

//setState? message props sent.