import { RegistrationForm } from '../data/types';
import reducer, { addUsers } from './formCardSlice';

const user: RegistrationForm = {
  id: '01',
  firstName: 'Marek',
  lastName: 'Pudzanowsky',
  birthday: '1982-01-22',
  gender: 'men',
  country: 'Poland',
  photo: 'https://example.png',
  check: true,
};

describe('formCardSlice', () => {
  it('addUser', () => {
    const state = reducer({ users: [] }, addUsers(user));
    expect(state.users).toHaveLength(1);
    expect(state.users[0]).toEqual(user);
  });
});
