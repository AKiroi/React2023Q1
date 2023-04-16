import React from 'react';
import CardItem from './CardItem';
import { render, screen, waitFor } from '@testing-library/react';
import { mockData } from '../../data/data';
import store from '../../store/store';
import { Provider } from 'react-redux';

describe('CardItem', () => {
  it('Should defined', () => {
    expect(<CardItem cardItem={mockData[0]} />).toBeDefined();
  });
  it('Render CardItem', async () => {
    render(
      <Provider store={store}>
        <CardItem cardItem={mockData[0]} />
      </Provider>
    );
    waitFor(() => {
      expect(screen.getByText(mockData[0].title)).toBeInTheDocument();
      expect(screen.getByText(`Brand: ${mockData[0].brand}`)).toBeInTheDocument();
      expect(screen.getByText(`Category: ${mockData[0].category}`)).toBeInTheDocument();
      expect(screen.getByText(`Description: ${mockData[0].description}`)).toBeInTheDocument();
      expect(screen.getByText(`Stock: ${mockData[0].stock}`)).toBeInTheDocument();
      expect(screen.getByText(`Rating: ${mockData[0].rating}`)).toBeInTheDocument();
      expect(screen.getByText(`Discount: ${mockData[0].discountPercentage}%`)).toBeInTheDocument();
    });
  });
});
