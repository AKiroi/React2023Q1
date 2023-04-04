import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { useForm } from 'react-hook-form';
import InputFile from './InputFile';
import { Forms } from '../RegistrationUserForm/RegistrationUserForm';

const TestInputFile = () => {
  const {
    register,
    formState: { errors },
  } = useForm<Forms>();
  return (
    <InputFile
      name="photo"
      labelName="Add photo:"
      type="file"
      register={register}
      errors={errors}
    />
  );
};

describe('InputFile component', () => {
  it('Render InputFile component', () => {
    render(<TestInputFile />);
    expect(screen.getByText('Add photo:')).toBeInTheDocument();
    expect(screen.getByTestId('inputFile')).toBeInTheDocument();
  });
});
