import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formCardReducer from './formCardSlice';
import { cardsApi } from '../services/cardsApi';
import { RegistrationForm } from '../data/types';

export type RootState = {
  search: {
    search: string;
  };
  formCard: {
    users: RegistrationForm[];
  };
};

export const store = configureStore({
  reducer: {
    search: searchReducer,
    formCard: formCardReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

export default store;

export type AppDispatch = typeof store.dispatch;
