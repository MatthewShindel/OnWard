import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ResultPage from './ResultPage';

test('renders correct content in ResultPage component', () => {
  const salary = 100000;
  const expenses = 2000;
  const zipcode = 12345;
  const combinedRate = 0.01;

  const { getByText } = render(
    <Router> {}
      <ResultPage
        salary={salary}
        expenses={expenses}
        zipcode={zipcode}
        combinedRate={combinedRate}
      />
    </Router>
  );

  const baseSalaryText = getByText(`Base Salary: $100,000`);
  const salaryAfterTaxText = getByText('Salary after income Tax: $82,947');
  const expensesText = getByText('Expenses: -$24,000');
  const expensesTaxText = getByText('Expenses Taxes: -$240');
  const finalSalaryText = getByText('Final Salary: $58,707');

  expect(baseSalaryText).toBeInTheDocument();
  expect(salaryAfterTaxText).toBeInTheDocument();
  expect(expensesText).toBeInTheDocument();
  expect(expensesTaxText).toBeInTheDocument();
  expect(finalSalaryText).toBeInTheDocument();
});
