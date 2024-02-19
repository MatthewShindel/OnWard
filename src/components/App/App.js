import logo from '../../logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage.js';
import ResultPage from '../ResultPage/ResultPage.js';
import Form from '../Form/Form.js';
import { getTaxRate } from '../../ApiCalls.js';

function App() {
	const [zipcode, setZipcode] = useState(0);
	const [salary, setSalary] = useState(0);
	const [expenses, setExpenses] = useState(0);
	const [combinedRate, setCombinedRate] = useState(0);

	function updateZipcode(zipcode) {
		setZipcode(zipcode)
		console.log(zipcode , typeof zipcode);
	}

	function updateSalary(salary) {
		setSalary(salary)
		console.log(salary , typeof salary);

	}
	function updateExpenses(expenses) {
		setExpenses(expenses)
		console.log(expenses , typeof expenses);

	}

	function updateCombinedRate(rate) {
		setCombinedRate(rate)
		console.log("combinedRate: ", rate, typeof rate);
	}

	// useEffect(() =>{
	// 	updateCombinedRate(getTaxRate(zipcode))
	// 	console.log("The combined Rate is:",combinedRate);
	// }, [zipcode])


  return (
    <div className="App">
      <header >
				
      </header>

			<main>
				<Routes>
					<Route path='/' element={<Form updateSalary = {updateSalary} updateZipcode = {updateZipcode}  updateExpenses = {updateExpenses} updateCombinedRate = {updateCombinedRate}/>}/>
					<Route path='/result' element={<ResultPage zipcode = {zipcode} salary = {salary} expenses = {expenses} combinedRate = {combinedRate}/>}/>
					<Route path='*' element={<ErrorPage/>}/>
				</Routes>
			</main>
    </div>
  );
}

export default App;

{/* <div className="App">
			<Link to={`/`}>
      <header className="App-header">
        <h1>Rancid Tomatillos</h1>
      </header>
			</Link>
      <main>
				<Routes>
					<Route path='/' element={<AllMovies movies={movies} updateMovieId={updateMovieId} updateMovieInfo={updateMovieInfo} handleError={handleError}/>}/>
					<Route path='/movie/:id' element={<MovieInfo singleMovieInfo={singleMovieInfo}/>}/>
					<Route path='*' element={<Error />}/>
				</Routes>
      </main>
    </div> */}