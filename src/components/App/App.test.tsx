import React from 'react';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Page Not Found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/invalidPath']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });
});
