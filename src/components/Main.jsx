import React, { PropTypes, Component } from "react";
import ResultBox from "./ResultBox.jsx";
import Navbar from "./Navbar.jsx";

class Main extends Component {
	super() {
		setState:{
			name,
			type,
			caffeine,
			benefits,
			summary,
			shop
		}
	},
	render() {
		<main class="container">
			<div id="showstuff"></div>
			<div class="row" style="margin: 0 0">
				<div class="col l12 m12 s12">
					<ul class="collapsible" data-collapsible="accordion" id="results">
						<Navbar/>
						<ResultBox {} />
					</ul>
				</div>
			</div>
		</main>
	}
};

export default Main;

//Main will be the component the search results load into. So should be renamed?

//App
	//Header
	//Main
		//Search Bar Box
		//Results Box
			//Results
	//Footer