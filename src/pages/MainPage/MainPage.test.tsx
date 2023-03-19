import React from 'react';
import { describe, it } from 'vitest';

import MainPage from './MainPage';

describe('MainPage', () => {
  it('Should defined', () => {
    expect(<MainPage />).toBeDefined();
  });
});
