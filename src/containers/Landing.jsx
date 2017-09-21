import React, { PropTypes, Component } from "react";
import Hero from "../components/Landing/Hero.jsx";

class Landing extends Component {
	
	render() {
		return(
			<main className="container">
				<Hero/>
				<div id="showstuff">
				<p>Tea infographics, your visual data resource for all things tea.</p></div>
				<div className="row">
					<div className="col l12 m12 s12">
						<ul className="collapsible" data-collapsible="accordion" id="results">
							<li>CatCatCat</li>
						</ul>
					</div>
				</div>
			</main>
		);
	}
	
}

export default Landing;