import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import Main from '../components/Main.jsx';

export default () => {
	return(
		<Route path='/' component={ App }>
			<IndexRoute component={ Main } />
		</Route>
	);
};