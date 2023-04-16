import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { useForm } from 'react-hook-form';
import InputRadio from './InputRadio';
import { Forms } from '../RegistrationUserForm/RegistrationUserForm';

const TestInputRadio = () => {
  const {
    register,
    formState: { errors },
  } = useForm<Forms>();
  return (
    <InputRadio
      name="gender"
      type="radio"
      labelName="Gender:"
      register={register}
      errors={errors}
    />
  );
};

describe('InputRadio component', () => {
  it('Render InputRadio component', () => {
    render(<TestInputRadio />);
    expect(screen.getByText('Gender:')).toBeInTheDocument();
    const female = screen.getByLabelText('female');
    fireEvent.change(female, { target: { checked: true } });
    expect(female).toBeChecked();
  });
});
