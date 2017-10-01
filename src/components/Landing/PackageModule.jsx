import React, { PropTypes, Component } from "react";
import "../../assets/css/Landing/package-module.css";

class PackageModule extends Component {
	
	render() {
		return(
			<div className="package-module">
				<button>
					<h4>Package 1</h4>
					<p>asdjf;lajsdf;lajsfl;jadl;fa;sdfj</p>
				</button>
				<button>
					<h4>Package 2</h4>
					<p>asdjf;lajsdf;lajsfl;jadl;fa;sdfj</p>
				</button>
				<button>
					<h4>Package 3</h4>
					<p>asdjf;lajsdf;lajsfl;jadl;fa;sdfj</p>				
				</button>
				<button>
					<h4>Package 4</h4>
					<p>asdjf;lajsdf;lajsfl;jadl;fa;sdfj</p>
				</button>				
			</div>
		);
	}
};

export default PackageModule;