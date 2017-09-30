import React, { PropTypes, Component } from "react";
import "../../assets/css/Landing/blog-module.css";

class BlogModule extends Component {
	
	render() {
		return(
			<div className="blog-module">
				<div>
					<img src="#" alt="blog photo"/>
				</div>
				<div>
					<form>
						<h2>Follow our blog!</h2>
						<p>Discover our tea lifestyle.</p>
						<button>Subscribe</button>
					</form>
				</div>
			</div>
		);
	}
};

export default BlogModule;