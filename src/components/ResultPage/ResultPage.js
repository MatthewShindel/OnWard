import './ResultPage.css'
import { Link } from 'react-router-dom'

export default function ResultPage({ salary, expenses, zipcode, combinedRate }) {
	let salaryAfterTax = 0;
	let expensesTax = 0;
	let salaryAfterTaxAndExpenses = 0;

	const numberWithCommas = (number) => {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	function calculateSalaryAfterTax(income) {
		let tax = 0;
		if (income <= 11600) {
			tax = income * 0.10;
		} else if (income <= 47150) {
			tax = 11600 * 0.10 + (income - 11600) * 0.12;
		} else if (income <= 100525) {
			tax = 11600 * 0.10 + (47150 - 11600) * 0.12 + (income - 47150) * 0.22;
		} else if (income <= 191951) {
			tax = 11600 * 0.10 + (47150 - 11600) * 0.12 + (100525 - 47150) * 0.22 + (income - 100525) * 0.24;
		} else if (income <= 243725) {
			tax = 11600 * 0.10 + (47150 - 11600) * 0.12 + (100525 - 47150) * 0.22 + (191951 - 100525) * 0.24 + (income - 191951) * 0.32;
		} else if (income <= 609350) {
			tax = 11600 * 0.10 + (47150 - 11600) * 0.12 + (100525 - 47150) * 0.22 + (191951 - 100525) * 0.24 + (243725 - 191951) * 0.32 + (income - 243725) * 0.35;
		} else {
			tax = 11600 * 0.10 + (47150 - 11600) * 0.12 + (100525 - 47150) * 0.22 + (191951 - 100525) * 0.24 + (243725 - 191951) * 0.32 + (609350 - 243725) * 0.35 + (income - 609350) * 0.37;
		}
		return Math.round((income - tax) * 100) / 100;
	}
	salaryAfterTax = calculateSalaryAfterTax(salary)
	// console.log("combinedRate in the ResultPage.js:", combinedRate);
	expensesTax = parseFloat(combinedRate) * parseInt(expenses)
  salaryAfterTaxAndExpenses = salaryAfterTax - expensesTax

	return (
		<div className="ResultPage">
			<h1 className="header">This is the ResultPage</h1>
			<h2 className="salary">This is the salary, ${salary}</h2>
			<h2 className="salaryMinusTaxes">This is the salary after taxes, ${salaryAfterTax}</h2>
			<h2 className="salaryMinusTaxes">This is the combinedRate ${combinedRate}</h2>
			<h2 className="expenses">This is the annual expenses, ${expenses}</h2>
			<h2 className="expensesTax">This is the tax on expenses, ${expensesTax}</h2>
			<h2 className="zipcode">This is the zipcode, {zipcode}</h2>

			<h1 className="salaryTagline">This is your final salary after all expenses and taxes:</h1>
			<h1 className="finalSalaryAmount">${salaryAfterTaxAndExpenses}</h1>

			<Link to={`/`} className='homePageLink'>
				<h3>Click here to head back home!</h3>
			</Link>
		</div>
	)
}



{/* <h1 className='header'>Here's Your Results</h1>
<p className='salary'>Base Salary: ${numberWithCommas(salary)} </p>
<p className='salaryMinusTaxes'>Salary after income Tax: ${numberWithCommas(salaryAfterTax)} </p>
<p className='expenses'>Expenses:- ${numberWithCommas(expenses)} </p>
<p className='expensesTax'>Expenses Taxes: - ${numberWithCommas(expensesTax)} </p>
<h3 className='salaryTagline'>Final Salary: ${numberWithCommas(salaryAfterTaxAndExpenses)} </h3> */}
