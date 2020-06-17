import axios from 'axios';

import { BASE_URL } from './config';

const instance = axios.create({
	baseURI: BASE_URL,
	timeout: 60000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'Access-Control-Allow-Origin': '*',
		AccessControlAllowMethods: 'GET, POST, PUT, DELETE, OPTIONS, PATCH'
	}
});

instance.interceptors.request.use(
	async (reqConfig) => {
		const isInternet = await navigator.onLine;
		if (!isInternet)
			return Promise.reject(
				new Error({
					response: {
						status: 111,
						message: 'Internet is not available'
					}
				})
			);
		// const accessToken = await AsyncStorage.getItem(Constants.StorageKey.TOKEN);
		// const currentLocale = I18n.currentLocale().slice(0, 2);
		let headers;
		// if (accessToken) {
		headers = {
			// 'Accept-Language': currentLocale,
			// Authorization: `Token ${accessToken}`,
			'Content-Type': 'application/json'
		};
		// } else {
		// 	headers = {
		// 		'Accept-Language': currentLocale,
		// 		'Content-Type': 'application/json'
		// 	};
		// }
		console.log('reqConfig :', reqConfig);
		return { ...reqConfig, headers };
	},
	(error) => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response) => {
		console.log('response :', response);
		return response;
	},
	(error) => {
		console.log('error :', error);
		if (typeof error === 'undefined' || typeof error.response === 'undefined') {
			const serverError = {
				data: {
					message: 'Some things wrong'
				}
			};

			return Promise.reject(serverError);
		}
		if (error.response.status === 401) {
		}
		return Promise.reject(error.response);
	}
);

export default instance;
