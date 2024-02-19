import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorPage from './ErrorPage';

describe('ErrorPage component', () => {
  test('renders Page not Found text', () => {
    render(<Router><ErrorPage /></Router>);
    const errorText = screen.getByText(/Page not Found/i);
    expect(errorText).toBeInTheDocument();
  });

  test('renders link to home page', () => {
    render(<Router><ErrorPage /></Router>);
    const linkElement = screen.getByRole('link', { name: /Click here to head back home!/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});