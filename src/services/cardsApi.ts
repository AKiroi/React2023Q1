import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardsType } from 'pages/MainPage/MainPage';

export type Response = {
  products: CardsType[];
  total: number;
  skip: number;
  limit: number;
};

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (builder) => ({
    getCards: builder.query<CardsType[], string>({
      query: (value) => ({
        url: `products/search?q=${value}`,
      }),
      transformResponse: (response: Response) => response.products,
    }),
    getCardById: builder.query<CardsType, number>({
      query: (id) => ({
        url: `products/${id}`,
      }),
    }),
  }),
});

export const { useGetCardsQuery, useGetCardByIdQuery } = cardsApi;
