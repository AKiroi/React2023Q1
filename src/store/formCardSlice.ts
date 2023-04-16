import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RegistrationForm } from '../data/types';

type FormCardSlice = {
  users: RegistrationForm[];
};

const formCardSlice = createSlice({
  name: 'formCard',
  initialState: {
    users: [],
  } as FormCardSlice,
  reducers: {
    addUsers(state, action: PayloadAction<RegistrationForm>) {
      state.users.push(action.payload);
    },
  },
});

export const { addUsers } = formCardSlice.actions;

export default formCardSlice.reducer;
