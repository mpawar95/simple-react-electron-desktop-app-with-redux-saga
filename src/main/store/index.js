import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import app from './reducers';

import dataSaga from './sagas';

/**
 * @param {Object} options
 * @param {*} [options.saga] custom saga middleware, defaults to sagas/index.js default
 */

export default function configureStore(options = {}) {
	const { saga = dataSaga } = options;

	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(app, applyMiddleware(sagaMiddleware));

	sagaMiddleware.run(saga);

	return store;
}
