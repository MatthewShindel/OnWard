import { render, fireEvent } from "@testing-library/react";
import ResultPage from "./ResultPage";
import { BrowserRouter as Router } from 'react-router-dom';

describe(ResultPage, () => {
  it("renders the text in each header", () => {
    const salary =  100000;
    const expenses =  20000;
    const zipcode = '12345';
    const combinedRate =  0.1;
    const { getByText } = render(
      <Router>
        <ResultPage 
          salary={salary} 
          expenses={expenses} 
          zipcode={zipcode} 
          combinedRate={combinedRate}
        />
      </Router>
    );
    expect(getByText('This is the salary after taxes,')).toBeInTheDocument();
  })
});

// describe(ResultPage, () => {
//   it("renders the text in each header", () => {
//     // Define the variables with some example values
//     const salary =  50000;
//     const expenses =  20000;
//     const zipcode = '12345';
//     const combinedRate =  0.1;

//     const { getByText } = render(
//       <ResultPage  
//         salary={salary}  
//         expenses={expenses}  
//         zipcode={zipcode}  
//         combinedRate={combinedRate}
//       />
//     );
//     expect(getByText('This is the salary after taxes,')).toBeInTheDocument();
//   })
// });

// it('submits the form with valid data', () => {
//   const updateSalary = jest.fn();
//   const updateExpenses = jest.fn();
//   const updateZipcode = jest.fn();
//   const updateCombinedRate = jest.fn();
//   const navigate = jest.fn();

//   const { getByPlaceholderText, getByText } = render(
//     <Form
//       updateSalary={updateSalary}
//       updateExpenses={updateExpenses}
//       updateZipcode={updateZipcode}
//       updateCombinedRate={updateCombinedRate}
//       navigate={navigate}
//     />
//   );
// 82947
{/* <h2>This is the salary, ${salary}</h2>
			<h2>This is the salary after taxes, ${salaryAfterTax}</h2>
			<h2>This is the expenses annually, ${expenses}</h2>
			<h2>This is the tax on expenses, ${expensesTax}</h2>
			<h2>This is the zipcode, {zipcode}</h2>

			<h1>This is your final salary after all expenses and taxes:</h1>
			<h1>${salaryAfterTax - expenses - expensesTax}</h1> */}