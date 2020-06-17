import React, { Component } from 'react';

import { Provider } from 'react-redux';

import Router from '../Router';
import { ConnectedRouter } from 'react-router-redux';

export default class App extends Component {
	render() {
		return (
			<Provider store={this.props.store}>
				<Router />
			</Provider>
		);
	}
}
