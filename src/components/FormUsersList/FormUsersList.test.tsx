import React from 'react';
import { render, screen } from '@testing-library/react';
import FormUsersList from './FormUsersList';
import { RegistrationForm } from '../../data/types';
import '@testing-library/jest-dom';
import store from '../../store/store';
import { Provider } from 'react-redux';

const mockData = [
  {
    id: '01',
    firstName: 'TestName',
    lastName: 'TestLastName',
    birthday: '01-01-2023',
    gender: 'male',
    country: 'England',
    photo: 'test.png',
    check: true,
  },
  {
    id: '2',
    firstName: 'TestName',
    lastName: 'TestLastName',
    birthday: '01-01-2023',
    gender: 'female',
    country: 'England',
    photo: 'test.png',
    check: true,
  },
];

describe('Cards component', () => {
  //it('displays users list when the data is not empty', () => {
  //  render(
  //    <Provider store={store}>
  //      <FormUsersList />
  //    </Provider>
  //  );
  //  expect(screen.getAllByTestId('user').length).toBe(mockData.length);
  //});

  it('displays users list when the data is empty', () => {
    const users: RegistrationForm[] = [];
    render(
      <Provider store={store}>
        <FormUsersList />
      </Provider>
    );
    expect(screen.queryAllByTestId('users').length).toBe(0);
  });
});
