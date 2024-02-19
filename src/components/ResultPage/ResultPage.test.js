import { render, fireEvent } from "@testing-library/react";
import ResultPage from "./ResultPage";
import { BrowserRouter as Router } from 'react-router-dom';

describe(ResultPage, () => {
  it("renders the text in each header, displays the correct salary when passed as a prop, renders the correct salary after taxes for a salary of 100,000", () => {
    const salary =  100000;
    const expenses =  20000;
    const zipcode = '12345';
    const combinedRate =  0.1;
    const expectedSalaryAfterTaxes = 82947;
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
    expect(getByText(/This is the ResultPage/)).toBeInTheDocument();
    expect(getByText(/This is the salary,/)).toBeInTheDocument();
    expect(getByText(/This is the salary after taxes,/)).toBeInTheDocument();
    expect(getByText(/This is the annual expenses,/)).toBeInTheDocument();
    expect(getByText(/This is the tax on expenses,/)).toBeInTheDocument();
    expect(getByText(/This is the zipcode,/)).toBeInTheDocument();
    expect(getByText(/This is your final salary after all expenses and taxes:/)).toBeInTheDocument();
    expect(getByText(/Click here to head back home!/)).toBeInTheDocument();
    expect(getByText(new RegExp(`This is the salary after taxes, \\$${expectedSalaryAfterTaxes}`))).toBeInTheDocument();
    expect(getByText(new RegExp(`This is the salary, \\$${salary}`))).toBeInTheDocument();
  })
});
function calculateSalaryAfterTax(income) {
}

// describe("ResultPage", () => {
//   it("displays the correct salary when passed as a prop, renders the correct salary after taxes for a salary of 100,000", () => {
//     const salary =  100000;
//     const expenses =  20000;
//     const zipcode = '12345';
//     const combinedRate =  0.1;

//     const { getByText } = render(
//       <Router>
//         <ResultPage  
//           salary={salary}  
//           expenses={expenses}  
//           zipcode={zipcode}  
//           combinedRate={combinedRate}
//         />
//       </Router>
//     );
//     const expectedSalaryAfterTaxes = 82947;
//     expect(getByText(new RegExp(`This is the salary after taxes, \\$${expectedSalaryAfterTaxes}`))).toBeInTheDocument();
//     expect(getByText(new RegExp(`This is the salary, \\$${salary}`))).toBeInTheDocument();

//   });
// });
// function calculateSalaryAfterTax(income) {
// }

// describe("ResultPage", () => {
//   it("displays the correct salary when passed as a prop", () => {
//     const salary =   100000;
//     const expenses =   20000;
//     const zipcode = '12345';
//     const combinedRate =   0.1;

//     const { getByText } = render(
//       <Router>
//         <ResultPage   
//           salary={salary}   
//           expenses={expenses}   
//           zipcode={zipcode}   
//           combinedRate={combinedRate}
//         />
//       </Router>
//     );
//     expect(getByText(new RegExp(`This is the salary, \\$${salary}`))).toBeInTheDocument();
//   });
// });

//     // The expected salary after taxes is calculated based on the given salary
//     // The actual calculation logic should be in your component or imported from another module
//     const expectedSalaryAfterTaxes =  82947; // Replace this with the actual expected value

//     // Use a regular expression to match the text because the salary is rendered as part of a string
//     expect(getByText(new RegExp(`This is the salary after taxes, \\$${expectedSalaryAfterTaxes}`))).toBeInTheDocument();
//   });
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