import { useNavigate } from 'react-router-dom';
export const getTaxRate = (zipcode) => {

	const url = `https://u-s-a-sales-taxes-per-zip-code.p.rapidapi.com/${zipcode}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '8e3c03a57bmshcf9c926514fc323p15ca95jsna29d71f8a66a',
			'X-RapidAPI-Host': 'u-s-a-sales-taxes-per-zip-code.p.rapidapi.com'
		}
	};

	return fetch(url, options)
	.then(response => {
		if (!response.ok) {
			throw new Error(`${response.status}: ${response.statusText}`)
		}
		return response.json();
	})
	.then(data =>  data.estimated_combined_rate)
}