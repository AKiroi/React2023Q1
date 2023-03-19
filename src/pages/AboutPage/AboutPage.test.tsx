import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('About test', () => {
  it('About render', () => {
    render(<AboutUs />);
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('About us');
  });
});
