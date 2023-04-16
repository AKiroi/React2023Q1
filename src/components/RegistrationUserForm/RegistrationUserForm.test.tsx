import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import RegistrationUserForm from './RegistrationUserForm';
import store from '../../store/store';
import { Provider } from 'react-redux';

describe('RegistrationUserForm component', () => {
  it('Render RegistrationUserForm component', async () => {
    render(
      <Provider store={store}>
        <RegistrationUserForm />
      </Provider>
    );
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});
