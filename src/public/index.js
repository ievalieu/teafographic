import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, browserHistory, IndexRoute } from "react-router";

const appEntry = {
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
		</Route>
	</Router>
};

ReactDOM.render(appEntry, document.querySelector("#root"));