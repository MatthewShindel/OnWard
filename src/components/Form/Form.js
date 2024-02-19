import './Form.css'
import { getTaxRate } from '../../ApiCalls'
import { useState } from 'react';
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function Form( { updateSalary, updateExpenses, updateZipcode, updateCombinedRate, navigate} ) {
	const [salary, setSalary] = useState('');
  const [expenses, setExpenses] = useState('');
  const [zipcode, setZipcode] = useState('');
	// const navigate = useNavigate();
  function submitUserData(event) {
    event.preventDefault();
		const validNumberRegex = /\d+/
		const validZipcode = /^\d{5}(?:[-\s]\d{4})?$/gm;

		if(!validNumberRegex.test(salary)){
			alert('The value you put in for your salary is invalid. Please put in a valid number.')
			return;
		}
		if(!validNumberRegex.test(expenses)){
			alert('The value you put in for your expenses is invalid. Please put in a valid number.')
			return;
		}
		if(!validZipcode.test(zipcode)){
			alert('The value you put in for your zipcode is invalid. Please put in a valid number.')
			return;
		}
		console.log(zipcode);
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
    <form> 
			<input
				data-testid = "salary"
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
  )
}
{/* <Link to="/">
			<h3 >Click here to head back home!</h3>
		</Link> */}
{/* <Link to={`/`}>
			<input type="button" className="exitButton" value={'Click to Leave'}></input>
		</Link> */}
	// 	<Link to="/">
	// 	<button className="return-to-game-btn">Return to Game</button>
	// </Link> from triviaTroll



