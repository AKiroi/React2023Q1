import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
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

describe('Card', () => {
  it('render card ', () => {
    render(<Card card={mockData} setIsModal={() => {}} setCardId={() => {}} />);

    const title = screen.getByText('perfume Oil');
    const brand = screen.getByText('Brand: Impression of Acqua Di Gio');
    const category = screen.getByText('Category: fragrances');
    const stock = screen.getByText('Stock: 65');
    const rating = screen.getByText('Rating: 4.26');

    expect(title).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(brand).toBeInTheDocument();
    expect(stock).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
  });

  it('Should defined', () => {
    render(<Card card={mockData} setIsModal={() => {}} setCardId={() => {}} />);
  });
});
