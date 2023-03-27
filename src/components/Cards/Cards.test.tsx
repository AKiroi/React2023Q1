import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Cards from './Cards';

describe('Cards', () => {
  it('Should be defined', () => {
    expect(<Cards />).toBeDefined();
  });

  it('Should has 8 cards', () => {
    render(<Cards />);
    expect(screen.queryAllByTestId('card')).toHaveLength(8);
  });
});
