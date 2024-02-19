import { render, fireEvent } from "@testing-library/react";
import ResultPage from "./ResultPage";

describe(ResultPage, () => {
  it("renders the text in each header", () => {
    const { getByText } = render(<ResultPage />);
    expect(getByText('This is the salary after taxes,')).toBeInTheDocument();

  })
});
// describe('Form', () => {
// 	it('renders all input fields and submit button', () => {
//     const { getByPlaceholderText, getByText } = render(<Form />);
    
//     expect(getByPlaceholderText('Salary')).toBeInTheDocument();
//     expect(getByPlaceholderText('Expenses')).toBeInTheDocument();
//     expect(getByPlaceholderText('Zipcode')).toBeInTheDocument();
//     expect(getByText('SUBMIT')).toBeInTheDocument();
//   });
// })
// 82947
{/* <h2>This is the salary, ${salary}</h2>
			<h2>This is the salary after taxes, ${salaryAfterTax}</h2>
			<h2>This is the expenses annually, ${expenses}</h2>
			<h2>This is the tax on expenses, ${expensesTax}</h2>
			<h2>This is the zipcode, {zipcode}</h2>

			<h1>This is your final salary after all expenses and taxes:</h1>
			<h1>${salaryAfterTax - expenses - expensesTax}</h1> */}