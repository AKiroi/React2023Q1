import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { useForm } from 'react-hook-form';
import Select from './Select';
import { Forms } from '../RegistrationUserForm/RegistrationUserForm';

const TestSelect = () => {
  const {
    register,
    formState: { errors },
  } = useForm<Forms>();
  return <Select name="country" labelName="Country:" register={register} errors={errors} />;
};

describe('Select component', () => {
  it('Render Select component', () => {
    render(<TestSelect />);
    expect(screen.getByText('Country:')).toBeInTheDocument();
  });
});
