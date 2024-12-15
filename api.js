'use strict';

const api_key = '4ca3da810ec7ce129a86d9a6a7b0d706';
// const api_key = 'ed99d3a99b2984bc2fb25e6f6baed3fb';

// export const fetchData = function (URL, callback) {
// 	fetch(`${URL}&appid=${api_key}`)
// 		.then((res) => res.json())
// 		// 	if (!res.ok) {
// 		// 		throw new Error(`HTTP error! status: ${res.status}`);
// 		// 	}
// 		// 	return res.json();
// 		// })
// 		.then((data) => callback(data));
// 	// .catch((error) => {
// 	// 	alert('Fetch error:', error);
// 	// });
// };

export const fetchData = async function (URL, callback) {
	try {
		const response = await fetch(`${URL}&appid=${api_key}`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		callback(data);
	} catch (error) {
		alert('An error occurred while fetching data. Please try again later.');
	}
};

export const url = {
	currentWeather(lat, lon) {
		return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
	},
	forecast(lat, lon) {
		return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
	},
	airPollution(lat, lon) {
		return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&units=metric`
	},
	reverseGeo(lat, lon) {
		return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
	},
	geo(query) {
		return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
	},
};
