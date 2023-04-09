import { CardsType } from '../pages/MainPage/MainPage';
import fetch from 'cross-fetch';

const enum URL {
  SEARCH = 'https://dummyjson.com/products/search?q=',
  PRODUCT_BY_ID = 'https://dummyjson.com/products/',
}

export const getData = async (search: string): Promise<CardsType[]> => {
  const res = await fetch(`${URL.SEARCH}${search}`);
  const data = await res.json();
  return data.products;
};

export const getDataById = async (cardId: string): Promise<CardsType> => {
  const res = await fetch(`${URL.PRODUCT_BY_ID}${cardId}`);
  const data = await res.json();
  return data;
};
