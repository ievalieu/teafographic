import React, { PropTypes, Component } from "react";
import ResultBox from "./ResultBox.jsx";
import SearchBarBox from "./SearchBarBox.jsx";

class Main extends Component {
	super() {
		setState = {
			name: "",
			type: "",
			caffeine: "",
			benefits: [],
			summary: "",
			shop: []
		}
	},
	render() {
		<main class="container">
			<div id="showstuff"></div>
			<div class="row" style="margin: 0 0">
				<div class="col l12 m12 s12">
					<ul class="collapsible" data-collapsible="accordion" id="results">
						<Navbar/>
						<ResultBox {this.props} />
					</ul>
				</div>
			</div>
		</main>
	},
	searchEncyclopedia (term) {
		setState; // fill state with current search results;
		return;
	}
};

export default Main;

//Main will be the component the search results load into. So should be renamed?

//App
	//Header
	//Main (setState object for results to send as props down to ResultsBox; should have function to search database for results based on searchterm from SearchBarBox; use helper function)
		//Search Bar Box (function to update searchterm state in Main)
		//Results Box (inherit props from Main; send an object down with many results)
			//Results (show props only)
	//Footer