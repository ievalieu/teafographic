import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import Main from '../components/Main.jsx';
import About from '../components/About.jsx';
import Blog from '../components/Blog.jsx';

export default () => {
	return(
		<Route path='/' component={ App }>
			<IndexRoute component={ Main } />
			<Route path="/about" component={About} />
			<Route path="/blog" component={Blog} />
		</Route>
	);
};