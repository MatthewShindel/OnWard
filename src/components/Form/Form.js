import './Form.css'
import { getTaxRate } from '../../ApiCalls'
import { useState } from 'react';
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function Form( { updateSalary, updateExpenses, updateZipcode, updateCombinedRate} ) {
	const [salary, setSalary] = useState('');
  const [expenses, setExpenses] = useState('');
  const [zipcode, setZipcode] = useState('');
	const navigate = useNavigate();
	// const regex = /^\d{5}(?:[-\s]\d{4})?$/gm; 

	// regex.exec(str)
  function submitUserData(event) {
    event.preventDefault();
		//do the setting state here
		//after that's done, clearContent
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



