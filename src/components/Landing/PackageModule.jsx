import React, { PropTypes, Component } from "react";
import "../../assets/css/Landing/package-module.css";

class PackageModule extends Component {
	
	render() {
		return(
			<div className="package-module">
				<button>
					<h2>One-Time Special Occasion</h2>
					<p>Special Occasion Tea Gift</p>
				</button>
				<button>
					<h2>3-Month Subscription</h2>
					<p>Tea Subscription for 3 months.</p>
				</button>
				<button>
					<h2>6-Month Subscription</h2>
					<p>asdjf;lajsdf;lajsfl;jadl;fa;sdfj</p>				
				</button>
				<button>
					<h2>12-Month Subscription</h2>
					<p>asdjf;lajsdf;lajsfl;jadl;fa;sdfj</p>
				</button>				
			</div>
		);
	}
};

export default PackageModule;