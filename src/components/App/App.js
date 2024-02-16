import logo from '../../logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage.js';
import ResultPage from '../ResultPage/ResultPage.js';
import Form from '../Form/Form.js';

function App() {
  return (
    <div className="App">
      <header >
				
      </header>

			<main>
				<Routes>
					<Route path='/' element={<Form/>}/>
					<Route path='/result' element={<ResultPage/>}/>
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