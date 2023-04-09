import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import MainPage from './MainPage';

describe('MainPage', () => {
  it('Should defined', () => {
    expect(<MainPage />).toBeDefined();
  });
  it('Render MainPage', () => {
    render(<MainPage />);
    expect(screen.getByTestId('mainPage')).toBeInTheDocument();
  });
});
