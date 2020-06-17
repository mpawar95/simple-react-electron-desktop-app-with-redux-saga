import { API_WATCHER, API_FAIL, API_SUCCESS } from '../constants';

const initialState = {
	loader: false,
	list: []
};

export default function myApiReducer(state = initialState, action) {
	switch (action.type) {
		case API_WATCHER:
			return {
				loader: true
			};
		case API_SUCCESS:
			return {
				loader: false,
				list: action.payload
			};
		case API_FAIL:
			return {
				loader: false
			};
		default:
			return state;
	}
}
