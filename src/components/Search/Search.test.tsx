import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from './Search';
import store from '../../store/store';
import { Provider } from 'react-redux';

describe('Search', () => {
  it('Should has placeholder', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByPlaceholderText('Find...')).toBeInTheDocument();
  });
  it('Render search component', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
});
