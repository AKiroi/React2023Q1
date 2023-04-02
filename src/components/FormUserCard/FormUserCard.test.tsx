import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormUserCard from './FormUserCard';

const mockData = {
  firstName: 'TestName',
  lastName: 'TestLastName',
  birthday: '01-01-2023',
  country: 'England',
  id: '01',
  gender: 'male',
  photo: 'test.png',
  check: true,
};

describe('FormUserCard', () => {
  it('renders user card', () => {
    render(<FormUserCard user={mockData} />);

    const firstName = screen.getByText('TestName');
    const lastName = screen.getByText('TestLastName');
    const birthday = screen.getByText('01-01-2023');
    const country = screen.getByText('England');

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(birthday).toBeInTheDocument();
    expect(country).toBeInTheDocument();
  });
});
