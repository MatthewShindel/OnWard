import logo from '../../logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage.js';
import ResultPage from '../ResultPage/ResultPage.js';
import Form from '../Form/Form.js';
import { getTaxRate } from '../../ApiCalls.js';
import { useNavigate } from 'react-router-dom';

function App() {
	const [zipcode, setZipcode] = useState(0);
	const [salary, setSalary] = useState(0);
	const [expenses, setExpenses] = useState(0);
	const [combinedRate, setCombinedRate] = useState(0);
	const navigate = useNavigate();

	function updateZipcode(zipcode) {
		setZipcode(zipcode)
	}

	function updateSalary(salary) {
		setSalary(salary)
	}

	function updateExpenses(expenses) {
		setExpenses(expenses)
	}

	function updateCombinedRate(rate) {
		setCombinedRate(rate)
	}

  return (
    <div className="App">
      <header >
				<img src='/default.png' alt='OnWard Logo'/>
      </header>
			<main>
				<Routes>
					<Route path='/' element={<Form updateSalary = {updateSalary} updateZipcode = {updateZipcode}  updateExpenses = {updateExpenses} updateCombinedRate = {updateCombinedRate} navigate = {navigate}/>}/>
					<Route path='/result' element={<ResultPage zipcode = {zipcode} salary = {salary} expenses = {expenses} combinedRate = {combinedRate}/>}/>
					<Route path='*' element={<ErrorPage/>}/>
				</Routes>
			</main>
    </div>
  );
}

export default App;
