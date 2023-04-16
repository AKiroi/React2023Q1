import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import store from '../../store/store';
import { Provider } from 'react-redux';
import UserEvent from '@testing-library/user-event';

import Modal from './Modal';

describe('Modal', () => {
  const setIsModal = vi.fn();
  it('Should defined', () => {
    expect(<Modal setIsModal={() => {}} cardId={2} />).toBeDefined();
  });
  it('Render Modal', () => {
    render(
      <Provider store={store}>
        <Modal setIsModal={() => {}} cardId={2} />
      </Provider>
    );
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('should closed modal', async () => {
    render(
      <Provider store={store}>
        <Modal setIsModal={setIsModal} cardId={2} />
      </Provider>
    );
    await UserEvent.click(screen.getByTestId('modalClosed'));
    expect(setIsModal).toHaveBeenCalled();
  });
});
