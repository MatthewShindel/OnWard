import './ResultPage.css'
import { Link } from 'react-router-dom'

export default function ResultPage( {salary, expenses, zipcode}){
	return(
		<div className="ResultPage">
			<h1>This is the ResultPage</h1>
			<h2>This is the salary, ${salary}</h2>
			<Link to={`/`}>
				<h3 >Click here to head back home!</h3>
			</Link>
		</div>
	)
}
