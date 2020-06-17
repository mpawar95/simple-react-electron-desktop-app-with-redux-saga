import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './main/App';
import { AppContainer } from 'react-hot-loader';
import * as serviceWorker from './serviceWorker';

import configureStore from './main/store';

const store = configureStore();

render(
	<AppContainer>
		<App store={store} />
	</AppContainer>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot) {
	module.hot.accept('./main/App', () => {
		const App = require('./main/App'); // eslint-disable-line global-require
		render(
			<AppContainer>
				<App />
			</AppContainer>,
			document.getElementById('root')
		);
	});
}
