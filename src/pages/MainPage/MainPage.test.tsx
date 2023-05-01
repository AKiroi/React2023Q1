import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import store from '../../store/store';
import { Provider } from 'react-redux';

import MainPage from './MainPage';

describe('MainPage', () => {
  it('Should defined', () => {
    expect(<MainPage />).toBeDefined();
  });
  it('Render MainPage', () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    expect(screen.getByTestId('mainPage')).toBeInTheDocument();
  });
});
