import { API_WATCHER, API_FAIL, API_SUCCESS } from '../constants';

export function myApiWatcher(payload, resolve, reject) {
	return { type: API_WATCHER, payload, resolve, reject };
}
export function myApiSuccess(payload, resolve, reject) {
	return { type: API_SUCCESS, payload, resolve, reject };
}
export function myApiFail(payload, resolve, reject) {
	return { type: API_FAIL, payload, resolve, reject };
}
