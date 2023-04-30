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

export const initStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    preloadedState,
    reducer: {
      search: searchReducer,
      formCard: formCardReducer,
      [cardsApi.reducerPath]: cardsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
  });

//export const store = configureStore({
//  reducer: {
//    search: searchReducer,
//    formCard: formCardReducer,
//    [cardsApi.reducerPath]: cardsApi.reducer,
//  },
//  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
//});

//export default store;

//export type AppDispatch = typeof initStore.dispatch;

//import { cardsApi } from '../reducers/API';
//import searchReducer from '../reducers/main';
//import formReducer from '../reducers/form';

//import { PreloadedState } from '@reduxjs/toolkit';
//import * as toolkitRaw from '@reduxjs/toolkit';
//type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
//const { configureStore, combineReducers } = ((toolkitRaw as TypeToolkitRaw).default ??
//  toolkitRaw) as typeof toolkitRaw;

//export const rootReducer = combineReducers({
//  search: searchReducer,
//  formCard: formCardReducer,
//  [cardsApi.reducerPath]: cardsApi.reducer,
//});

//export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
//  configureStore({
//    reducer: rootReducer,
//    preloadedState,
//    middleware: (getDefaultMiddleware) =>
//      getDefaultMiddleware({ immutableCheck: false }).concat(cardsApi.middleware),
//  });

//export type AppStore = ReturnType<typeof setupStore>;
//export type AppDispatch = AppStore['dispatch'];
//export type RootState = ReturnType<typeof rootReducer>;
