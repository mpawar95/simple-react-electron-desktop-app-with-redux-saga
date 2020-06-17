import { all } from 'redux-saga/effects';
import { myApiActionWatcher } from './myApi';

export default function* rootSaga() {
	yield all([ myApiActionWatcher() ]);
}
