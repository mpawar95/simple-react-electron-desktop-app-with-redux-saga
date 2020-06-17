import { put, takeLatest, call } from 'redux-saga/effects';
import { API_URL, BASE_URL } from '../../axios/config';
import axios from '../../axios';
import { myApiSuccess, myApiFail } from '../actions';
import { API_WATCHER } from '../constants';

function myAPI() {
	return axios.request({
		method: 'get',
		url: `${BASE_URL + API_URL.GET_DATA}`
	});
}

function* myApiActionEffect(myApiAction) {
	const { payload, resolve, reject } = myApiAction;
	console.log('myApiAction :', myApiAction);
	try {
		const response = yield call(myAPI);
		if (response.status) {
			yield put(myApiSuccess(response));
			resolve(response);
		}
	} catch (e) {
		yield put(myApiFail(e.data));
		reject(e);
	}
}
export function* myApiActionWatcher() {
	yield takeLatest(API_WATCHER, myApiActionEffect);
}
