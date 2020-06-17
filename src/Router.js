import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './main/screens/Main';
import Image from './main/screens/Images/Image';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Main} />
			<Route exact path="/image" component={Image} />
		</Switch>
	</BrowserRouter>
);

export default Router;
