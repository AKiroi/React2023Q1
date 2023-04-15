import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  it('Should has placeholder', () => {
    render(<Search setSearch={() => {}} />);
    expect(screen.getByPlaceholderText('Find...')).toBeInTheDocument();
  });
  it('Render search component', () => {
    render(<Search setSearch={() => {}} />);
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
});
