import React, { PropTypes, Component } from "react";

class Navbar extends Component {
	render() {
		<section style="margin-bottom: 25px">
			<form style="margin: 0 0">
				<div class="teal input-field" style="margin: 0 0;">
					<input id="search" value="cat" type="search" required style="margin: 0 0;"/>
					<label class="label-icon" for="search"><i class="material-icons">search</i></label>
					<i class="material-icons" style="height: 10px; width: 10px; padding: 5px 15px;">close</i>
				</div>
			</form>	
		</section>
	}
};

export default Navbar;