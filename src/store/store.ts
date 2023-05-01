import { configureStore, PreloadedState } from '@reduxjs/toolkit';
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
  [cardsApi.reducerPath]: ReturnType<typeof cardsApi.reducer>;
};

export const initialStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    preloadedState,
    reducer: {
      search: searchReducer,
      formCard: formCardReducer,
      [cardsApi.reducerPath]: cardsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
  });
