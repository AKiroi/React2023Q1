import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Modal from './Modal';

describe('Modal', () => {
  it('Should defined', () => {
    expect(<Modal setIsModal={() => {}} cardId={2} />).toBeDefined();
  });
  it('Render Modal', () => {
    render(<Modal setIsModal={() => {}} cardId={2} />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
