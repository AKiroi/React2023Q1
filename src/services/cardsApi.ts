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
    getProducts: builder.query<CardsType[], string>({
      query: (value) => ({
        url: `products/search?q=${value}`,
      }),
      transformResponse: (response: Response) => response.products,
    }),
  }),
});

export const { useGetProductsQuery } = cardsApi;
