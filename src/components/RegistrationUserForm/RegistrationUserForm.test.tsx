import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import RegistrationUserForm from './RegistrationUserForm';

describe('RegistrationUserForm component', () => {
  it('should display error message when input value is invalid', async () => {
    const { getByTestId, getByText } = render(<RegistrationUserForm addUser={() => {}} />);
    const input = getByTestId('first-name');
    fireEvent.change(input, { target: { value: '' } });
    const button = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(button);
    const message = getByText('The first name is required');
    await waitFor(() => {
      expect(message).toBeInTheDocument();
    });
  });
});
