import React, { PropTypes, Component } from "react";
import "../assets/css/Landing/landing.css";
import Hero from "../components/Landing/Hero.jsx";
import BlogModule from "../components/Landing/BlogModule.jsx";
import PackageModule from "../components/Landing/PackageModule.jsx";
import ShopModule from "../components/Landing/ShopModule.jsx";
import AdModule from "../components/Landing/AdModule.jsx";

class Landing extends Component {
	render() {
		return(
			<div>
				<Hero/>
				<PackageModule/>
				<ShopModule/>
				<BlogModule/>
				<AdModule/>
			</div>
		);
	}
}

export default Landing;