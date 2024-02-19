import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Form from "./Form";
import { wait } from "@testing-library/user-event/dist/utils";

global.alert = jest.fn();

describe('Form', () => {
	jest.mock('./Form', () => ({
		...jest.requireActual('./Form'), // use the actual implementation of Form
		getTaxRate: jest.fn(() => Promise.resolve({ estimated_combined_rate: 0.08 })), // mock the getTaxRate function to return a fixed value
	}));
	it('renders all input fields and submit button', () => {
		const { getByPlaceholderText, getByText } = render(<Form />);

		expect(getByPlaceholderText('Salary')).toBeInTheDocument();
		expect(getByPlaceholderText('Expenses')).toBeInTheDocument();
		expect(getByPlaceholderText('Zipcode')).toBeInTheDocument();
		expect(getByText('SUBMIT')).toBeInTheDocument();
	});

	it('submits the form with valid data', async () => {
		const updateSalary = jest.fn();
		const updateExpenses = jest.fn();
		const updateZipcode = jest.fn();
		const updateCombinedRate = jest.fn();
		const navigate = jest.fn();

		const { getByPlaceholderText, getByText } = render(
			<Form
				updateSalary={updateSalary}
				updateExpenses={updateExpenses}
				updateZipcode={updateZipcode}
				updateCombinedRate={updateCombinedRate}
				navigate={navigate}
			/>
		);

		fireEvent.change(getByPlaceholderText('Salary'), { target: { value: '50000' } });
		fireEvent.change(getByPlaceholderText('Expenses'), { target: { value: '25000' } });
		fireEvent.change(getByPlaceholderText('Zipcode'), { target: { value: '12345' } });
		fireEvent.click(getByText('SUBMIT'));

		await waitFor(() => {
			expect(updateSalary).toHaveBeenCalledWith('50000');
			expect(updateExpenses).toHaveBeenCalledWith('25000')
			expect(updateCombinedRate).toHaveBeenCalledWith(0.08);;
			expect(updateZipcode).toHaveBeenCalledWith('12345');
			expect(navigate).toHaveBeenCalledWith('/result');
		})
	});

	it('displays an alert for invalid salary input', async () => {
		const updateSalary = jest.fn();
		const updateExpenses = jest.fn();
		const updateZipcode = jest.fn();
		const updateCombinedRate = jest.fn();
		const navigate = jest.fn();
		const { getByPlaceholderText, getByText } = render(
			<Form navigate={navigate} />
		);


		fireEvent.change(getByPlaceholderText('Salary'), { target: { value: 'invalid' } });
		fireEvent.change(getByPlaceholderText('Expenses'), { target: { value: '25000' } });
		fireEvent.change(getByPlaceholderText('Zipcode'), { target: { value: '12345' } });
		fireEvent.click(getByText('SUBMIT'));


		expect(global.alert).toHaveBeenCalledWith('The value you put in for your salary is invalid. Please put in a valid number.');
	});

	it('displays an alert for invalid expenses input', async () => {
		const updateSalary = jest.fn();
		const updateExpenses = jest.fn();
		const updateZipcode = jest.fn();
		const updateCombinedRate = jest.fn();
		const navigate = jest.fn();
		const { getByPlaceholderText, getByText } = render(
			<Form navigate={navigate} />
		);

		fireEvent.change(getByPlaceholderText('Salary'), { target: { value: '50000' } });
		fireEvent.change(getByPlaceholderText('Expenses'), { target: { value: 'invalid' } });
		fireEvent.change(getByPlaceholderText('Zipcode'), { target: { value: '12345' } });
		fireEvent.click(getByText('SUBMIT'));

		expect(global.alert).toHaveBeenCalledWith('The value you put in for your expenses is invalid. Please put in a valid number.');
	});

	it('displays an alert for invalid zipcode input', async () => {
		const updateSalary = jest.fn();
		const updateExpenses = jest.fn();
		const updateZipcode = jest.fn();
		const updateCombinedRate = jest.fn();
		const navigate = jest.fn();
		const { getByPlaceholderText, getByText } = render(
			<Form navigate={navigate} />
		);

		fireEvent.change(getByPlaceholderText('Salary'), { target: { value: '50000' } });
		fireEvent.change(getByPlaceholderText('Expenses'), { target: { value: '25000' } });
		fireEvent.change(getByPlaceholderText('Zipcode'), { target: { value: 'potato' } });
		fireEvent.click(getByText('SUBMIT'));

		expect(global.alert).toHaveBeenCalledWith('The value you put in for your zipcode is invalid. Please put in a valid number.');
	});

});

