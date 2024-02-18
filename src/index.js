import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const url = `https://u-s-a-sales-taxes-per-zip-code.p.rapidapi.com/${zipcode}`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '8e3c03a57bmshcf9c926514fc323p15ca95jsna29d71f8a66a',
// 		'X-RapidAPI-Host': 'u-s-a-sales-taxes-per-zip-code.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// {
// state:"NY"
// state_rate:0.04
// estimated_combined_rate:0.08875 this is everything combined
// estimated_county_rate:0
// estimated_city_rate:0.045
// estimated_special_rate:0.00375
// risk_level: 0
// }