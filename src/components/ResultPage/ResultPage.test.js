import { render, fireEvent } from "@testing-library/react";
import ResultPage from "./ResultPage";

describe(ResultPage, () => {
  it("ResultPage displays the correct salary, salary after taxes, annual expenses, tax on expenses, zipcode, and final salary after all expenses and taxes", () => {
    const { getByText } = render(<ResultPage salary={100000} />)
    const salaryAfterTax = 
    expect(salaryAfterTax).toEqual(82947);
  })
  
});
// 82947
{/* <h2>This is the salary, ${salary}</h2>
			<h2>This is the salary after taxes, ${salaryAfterTax}</h2>
			<h2>This is the expenses annually, ${expenses}</h2>
			<h2>This is the tax on expenses, ${expensesTax}</h2>
			<h2>This is the zipcode, {zipcode}</h2>

			<h1>This is your final salary after all expenses and taxes:</h1>
			<h1>${salaryAfterTax - expenses - expensesTax}</h1> */}