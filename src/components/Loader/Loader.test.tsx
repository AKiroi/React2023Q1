import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Loader from './Loader';

describe('Loader', () => {
  it('Should defined', () => {
    expect(<Loader />).toBeDefined();
  });
  it('Render Loader', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
