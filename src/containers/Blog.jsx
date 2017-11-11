import React, { PropTypes, Component } from "react";
import Hero from "../components/Landing/Hero.jsx";

class Blog extends Component {
	
	render() {
		return(
			<main>
				<Hero/>
				<div>
					<h2>Blog</h2>
					<div>Newsfeed Row</div>
					<div>Newsfeed Row</div>
					<div>Newsfeed Row</div>					
				</div>
				<div className="sidebar">
					<form>
						<input placeholder="Search Articles"></input>
					</form>
				</div>
			</main>
		);
	}
	
}

export default Blog;

//Hero - featuring slideshow
	//Latest Article?
	//Featuring
//Should it be in newsfeed format?
//Newsfeed rows
	//h2
	//description
	//image
//Sidebar

//function for slideshow?
//function landingSlideshow (object) {
//	object being separate divs
// each div should hold an image, a title, a description, and an action
// return the object div into a div for that hero section.
// timed slideshow? 3 seconds?
// should allow for click function, click on the next tabs to go to a specific slideshow
//}