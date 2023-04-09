import React from 'react';
import CardItem from './CardItem';
import { render, screen, waitFor } from '@testing-library/react';
import { getDataById } from '../../utils/getData';

describe('CardItem', () => {
  it('Should defined', () => {
    expect(<CardItem cardId={22} />).toBeDefined();
  });
  it('Render CardItem', async () => {
    const data = await getDataById('1');
    render(<CardItem cardId={22} />);
    waitFor(() => {
      expect(screen.getByText(data.title)).toBeInTheDocument();
      expect(screen.getByText(`Brand: ${data.brand}`)).toBeInTheDocument();
      expect(screen.getByText(`Category: ${data.category}`)).toBeInTheDocument();
      expect(screen.getByText(`Description: ${data.description}`)).toBeInTheDocument();
      expect(screen.getByText(`Stock: ${data.stock}`)).toBeInTheDocument();
      expect(screen.getByText(`Rating: ${data.rating}`)).toBeInTheDocument();
      expect(screen.getByText(`Discount: ${data.discountPercentage}%`)).toBeInTheDocument();
    });
  });
});
