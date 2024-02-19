import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import App from './App';

describe('App component', () => {
  it('renders the Form component when the root path is visited', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(getByPlaceholderText('Salary')).toBeInTheDocument();
    expect(getByPlaceholderText('Expenses')).toBeInTheDocument();
    expect(getByPlaceholderText('Zipcode')).toBeInTheDocument();
  });

});
