import './Form.css'
import { getTaxRate } from '../../ApiCalls'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form({ updateSalary, updateExpenses, updateZipcode, updateCombinedRate, navigate }) {
	const [salary, setSalary] = useState('');
	const [expenses, setExpenses] = useState('');
	const [zipcode, setZipcode] = useState('');
	function submitUserData(event) {
		event.preventDefault();
		const validNumberRegex = /\d+/
		const validZipcode = /^\d{5}(?:[-\s]\d{4})?$/gm;

		if (!validNumberRegex.test(salary)) {
			alert('The value you put in for your salary is invalid. Please put in a valid number.')
			return;
		}
		if (!validNumberRegex.test(expenses)) {
			alert('The value you put in for your expenses is invalid. Please put in a valid number.')
			return;
		}
		if (!validZipcode.test(zipcode)) {
			alert('The value you put in for your zipcode is invalid. Please put in a valid number.')
			return;
		}
		
		getTaxRate(zipcode)
			.then(data => {
				updateCombinedRate(data);
				updateSalary(salary);
				updateExpenses(expenses);
				updateZipcode(zipcode);
				clearInput();
				navigate('/result');
			})
	}

	function clearInput() {
		setSalary(0);
		setExpenses(0);
		setZipcode(0);
	}

	return (
		<div className='form-container'>
			<p>Enter your salary, monthly expenses and zipcode to get an estimate of your future income.</p>
			<form className='main-form'>
				<input
					data-testid="salary"
					type='text'
					placeholder='Salary'
					name='salary'
					value={salary}
					onChange={event => setSalary(event.target.value)}
				/>

				<input
					type='text'
					placeholder='Expenses'
					name='expenses'
					value={expenses}
					onChange={event => setExpenses(event.target.value)}
				/>

				<input
					type='text'
					placeholder='Zipcode'
					name='zipcode'
					value={zipcode}
					onChange={event => setZipcode(event.target.value)}
				/>
				<button className="submitUserInput" onClick={submitUserData}>SUBMIT</button>
			</form>
		</div>
	)
}




