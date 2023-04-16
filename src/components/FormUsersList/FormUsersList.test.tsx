import React from 'react';
import { render, screen } from '@testing-library/react';
import FormUsersList from './FormUsersList';
import '@testing-library/jest-dom';
import store from '../../store/store';
import { Provider } from 'react-redux';

describe('FormUsersList component', () => {
  it('render FormUsersList', () => {
    render(
      <Provider store={store}>
        <FormUsersList />
      </Provider>
    );
    expect(screen.getByTestId('userList')).toBeInTheDocument();
  });
});
