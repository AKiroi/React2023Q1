import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import RegistrationUserForm from './RegistrationUserForm';

describe('RegistrationUserForm component', () => {
  it('Render RegistrationUserForm component', async () => {
    render(<RegistrationUserForm addUser={() => {}} />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});
