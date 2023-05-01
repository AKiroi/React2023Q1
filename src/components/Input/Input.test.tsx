import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { useForm } from 'react-hook-form';
import Input from './Input';
import { Forms } from '../RegistrationUserForm/RegistrationUserForm';

const TestInput = () => {
  const {
    register,
    formState: { errors },
  } = useForm<Forms>();
  return (
    <Input
      nameValue="firstName"
      labelName="Your first name:"
      type="text"
      register={register}
      errors={errors}
      placeholder="first name"
    />
  );
};

describe('Input component', () => {
  it('Render Input component', () => {
    render(<TestInput />);
    expect(screen.getByText('Your first name:')).toBeInTheDocument();
  });
});
