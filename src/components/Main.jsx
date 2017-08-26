import React, { PropTypes, Component } from "react";

class Main extends Component {
	render() {
		<main class="container">
			<div id="showstuff"></div>
			<div class="row" style="margin: 0 0">
				<div class="col l12 m12 s12">
					<ul class="collapsible" data-collapsible="accordion" id="results">
						<Results/>
					</ul>
				</div>
			</div>
		</main>
	}
};

export default Main;