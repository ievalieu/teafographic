import React, { PropTypes, Component } from "react";
import "../../assets/css/Landing/shop-module.css";

class ShopModule extends Component {
	
	render() {
		return(
			<div className="shop-module">
				<div>
					<img src="#" alt="Shop Image"/>
				</div>
				<div>
					<p>Don't want to buy a subscription, but interested in our inventory? Visit our online store!</p>
					<button>SHOP NOW</button>
				</div>
			</div>
		);
	}
};

export default ShopModule;