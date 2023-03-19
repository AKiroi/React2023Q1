import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import { CardType } from '../../data/types';

const mockData: CardType = {
  id: 1,
  category: 'Electric',
  name: 'Parallel',
  brand: 'Fender',
  photo: './img/01.jpeg',
  price: 1802,
  inStock: 18,
  rating: 4.42,
};

describe('Card', () => {
  it('render card ', () => {
    render(<Card card={mockData} />);

    const name = screen.getByText('Parallel');
    const brand = screen.getByText('Brand: Fender');
    const category = screen.getByText('Category: Electric');
    const stock = screen.getByText('Stock: 18');
    const rating = screen.getByText('Rating: 4.42');

    expect(name).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(brand).toBeInTheDocument();
    expect(stock).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
  });

  it('Should defined', () => {
    expect(<Card card={mockData} />).toBeDefined();
  });
});
