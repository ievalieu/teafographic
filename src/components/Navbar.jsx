import React, { PropTypes, Component } from "react";

class Navbar extends Component {
	render() {
		return(
		<section>
			<form onSubmit={ _onSubmit() }>
				<div className="teal input-field">
					<input id="search" value="cat" type="search" required />
					<label className="label-icon" for="search"><i className="material-icons">search</i></label>
					<i className="material-icons">close</i>
				</div>
			</form>	
		</section>
		);
	}
	_onSubmit () {
		//action on submit, get results
		//will update state for Main. 
	}
};

export default Navbar;

 // style="margin: 0 0"
 //  style="margin: 0 0;"
 //  style="margin: 0 0;"
 //  style="height: 10px; width: 10px; padding: 5px 15px;"
 //  style="margin-bottom: 25px"