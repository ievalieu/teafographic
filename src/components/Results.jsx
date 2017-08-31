import React, { PropTypes, Component } from "react";

class Results extends Component {
	render() {
		<li>
			<div className="collapsible-header"><i class="material-icons">filter_drama</i>Jasmine Pearl</div>
			<div className="collapsible-body">
				<div className="row">
				<div className="col l9 m9 s9">
					<span>
						<p>Type: Green</p>
						<p>Caffeine Level: High</p>
						<p>Health Benefits: Lowers Cholesterol</p>
						<p>Tea Summary: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia at, ratione recusandae voluptatum vero, qui temporibus tempora veritatis dolores maxime. Eius molestiae eum veniam reiciendis quae ipsa ad incidunt quis?</p>
						<p>Shop: www.birdpick.com</p>
					</span>
				</div>
				<div className="col l3 m3 s3">
					<img src="#" alt="jasmine tea"/>
				</div>
				</div>
			</div>
		</li>
	}
};

export default Results;


//Each p tag will have props, from the search bar. 