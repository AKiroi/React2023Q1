import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { useForm } from 'react-hook-form';
import InputCheckbox from './InputCheckbox';
import { Forms } from '../RegistrationUserForm/RegistrationUserForm';

const TestInputCheckbox = () => {
  const {
    register,
    formState: { errors },
  } = useForm<Forms>();
  return (
    <InputCheckbox
      name="check"
      labelName="I consent to my personal data"
      type="checkbox"
      register={register}
      errors={errors}
    />
  );
};

describe('InputCheckbox component', () => {
  it('Render InputCheckbox component', () => {
    render(<TestInputCheckbox />);
    expect(screen.getByText('I consent to my personal data')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    const personalData = screen.getByLabelText('I consent to my personal data');
    fireEvent.change(personalData, { target: { checked: true } });
    expect(personalData).toBeChecked();
  });
});
