import React, { PropTypes, Component } from "react";
import "../../assets/css/Landing/package-module.css";

class PackageModule extends Component {
	
	render() {
		return(
			<div className="package-module">
				<button>Package 1</button>
				<button>Package 2</button>
				<button>Package 3</button>
				<button>Package 4</button>				
			</div>
		);
	}
};

export default PackageModule;