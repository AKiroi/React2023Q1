import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  it('Should has placeholder', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText('Find...')).toBeInTheDocument();
  });
});
