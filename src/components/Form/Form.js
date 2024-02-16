import './Form.css'



export default function Form() {

	function testAPi(zipcode) {
		const url = 'https://u-s-a-sales-taxes-per-zip-code.p.rapidapi.com/10017';
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '8e3c03a57bmshcf9c926514fc323p15ca95jsna29d71f8a66a',
				'X-RapidAPI-Host': 'u-s-a-sales-taxes-per-zip-code.p.rapidapi.com'
			}
		};

		fetch(url, options)
			.then(response => {
				if (!response.ok) {
					throw new Error(`${response.status}: ${response.statusText}`);
				} else {
					return response.json()
				}
			})
			.then(data => console.log(data))

	}


	return (
		<div className="Form">
			<h1>This is the form page</h1>
			<button ></button>

			<form>
				<input
					type='text'
					placeholder='Salary'
					name='salary'
				/>
				<input
					type='text'
					placeholder='expenses'
					name='zipcode'
				/>
				<input
					type='text'
					placeholder='Zipcode'
					name='zipcode'
				/>
			</form>
		</div>
	)
}

{/* <form>
	<input
		type='text'
		placeholder='Title'
		name='title'
		value={title}
		onChange={event => setTitle(event.target.value)}
	/>

	<input
		type='text'
		placeholder='Description'
		name='description'
		value={description}
		onChange={event => setDescription(event.target.value)}
	/>

	<button onClick={event =>
		submitIdeas(event)}>Submit</button>
</form> */}