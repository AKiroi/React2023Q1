import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';

describe('ErrorPage test', () => {
  it('ErrorPage render', () => {
    render(<ErrorPage />);
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('Page Not Found');
  });
});
