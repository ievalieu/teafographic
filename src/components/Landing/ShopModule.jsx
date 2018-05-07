import React, { PropTypes, Component } from "react";
import "../../assets/css/Landing/shop-module.css";
import igormiske from "../../assets/images/igormiske.jpg";

class ShopModule extends Component {
	
	render() {
		return(
			<div className="shop-module">
				<div className="shop-module-img">
					<img src={igormiske} alt="Shop Image"/>
				</div>
				<div className="shop-module-textbox">
					<h2>Shop for Tea</h2>
					<p>Don't want to buy a subscription, but interested in our inventory? Visit our online store!</p>
					<button>SHOP NOW</button>
				</div>
			</div>
		);
	}
};

export default ShopModule;