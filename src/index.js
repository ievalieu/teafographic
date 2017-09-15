import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import makeRoutes from "./containers/route.js";

const appEntry = (
	<Router history={ browserHistory }>
		{makeRoutes()}
	</Router>
);

ReactDOM.render(appEntry, document.querySelector("#root"));