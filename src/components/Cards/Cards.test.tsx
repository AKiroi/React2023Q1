import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Cards from './Cards';
import { mockData } from '../../data/data';

describe('Cards', () => {
  it('Should be defined', () => {
    expect(<Cards cards={mockData} setIsModal={() => {}} setCardId={() => {}} />).toBeDefined();
  });

  it('Render Cards', () => {
    render(<Cards cards={mockData} setIsModal={() => {}} setCardId={() => {}} />);
    expect(screen.getByTestId('cards')).toBeInTheDocument();
  });
});
