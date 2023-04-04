import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { useForm } from 'react-hook-form';
import InputDate from './InputDate';
import { Forms } from '../RegistrationUserForm/RegistrationUserForm';

const TestInputDate = () => {
  const {
    register,
    formState: { errors },
  } = useForm<Forms>();
  return (
    <InputDate
      name="birthday"
      labelName="Your birthday:"
      type="date"
      register={register}
      errors={errors}
    />
  );
};

describe('InputDate component', () => {
  it('Render InputDate component', () => {
    render(<TestInputDate />);
    expect(screen.getByText('Your birthday:')).toBeInTheDocument();
    expect(screen.getByTestId('inputDate')).toBeInTheDocument();
  });
});
