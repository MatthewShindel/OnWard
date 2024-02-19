import { render, fireEvent } from "@testing-library/react";
import ResultPage from "./ResultPage";
import { BrowserRouter as Router } from 'react-router-dom';

describe(ResultPage, () => {
  it("renders the text in each header, renders the salary, salary after taxes, annual expenses, tax on expenses, zipcode, and salary after tax and expenses", () => {
    const salary =  100000;
    const expenses =  20000;
    const zipcode = '12345';
    const combinedRate =  0.1;
    const expectedSalaryAfterTaxes = 82947;
    const expensesTax = 2000;
    const salaryAfterTaxAndExpenses = 80947;
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
    expect(getByText(new RegExp(`This is the salary, \\$${salary}`))).toBeInTheDocument();
    expect(getByText(new RegExp(`This is the salary after taxes, \\$${expectedSalaryAfterTaxes}`))).toBeInTheDocument();
    expect(getByText(new RegExp(`This is the annual expenses, \\$${expenses}`))).toBeInTheDocument();
    expect(getByText(new RegExp(`This is the tax on expenses, \\$${expensesTax}`))).toBeInTheDocument();
    expect(getByText(new RegExp(`This is the zipcode, ${zipcode}`))).toBeInTheDocument();
    expect(getByText(/This is your final salary after all expenses and taxes:/)).toBeInTheDocument();
    expect(getByText(`\$${salaryAfterTaxAndExpenses}`)).toBeInTheDocument();
    expect(getByText(/Click here to head back home!/)).toBeInTheDocument();
    
  })
});
