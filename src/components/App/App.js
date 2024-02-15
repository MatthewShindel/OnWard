import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage';
import ResultPage from '../ResultPage/ResultPage';
import Form from '../Form/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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