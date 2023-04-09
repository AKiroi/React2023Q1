import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardItem from './CardItem';
import { CardsType } from '../../pages/MainPage/MainPage';

const mockData: CardsType = {
  id: 11,
  title: 'perfume Oil',
  description: 'Mega Discount, Impression of A...',
  price: 13,
  discountPercentage: 8.4,
  rating: 4.26,
  stock: 65,
  brand: 'Impression of Acqua Di Gio',
  category: 'fragrances',
  thumbnail: 'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
  images: [
    'https://i.dummyjson.com/data/products/11/1.jpg',
    'https://i.dummyjson.com/data/products/11/2.jpg',
    'https://i.dummyjson.com/data/products/11/3.jpg',
    'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
  ],
};


describe('CardItem', () => {
  it('Should defined', () => {
    expect(<CardItem cardId={1} />).toBeDefined();
  });
});
