import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, browserHistory, IndexRoute } from "react-router";
import Main from "./components/Main.jsx";

const appEntry = {
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Main}/>
		</Route>
	</Router>
};

ReactDOM.render(appEntry, document.querySelector("#root"));