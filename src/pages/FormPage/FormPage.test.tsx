import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import FormPage from '../FormPage/FormPage';

describe('FormPage', () => {
  it('Should defined', () => {
    expect(<FormPage />).toBeDefined();
  });
  it('Render FormPage', () => {
    render(<FormPage />);
    expect(screen.getByText(/Registration form/i)).toBeInTheDocument();
    expect(screen.getByTestId('formPage')).toBeInTheDocument();
  });
});
