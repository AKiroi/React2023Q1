import React from 'react';
import { describe, it } from 'vitest';

import Header from './Header';

describe('Header', () => {
  it('Should defined', () => {
    expect(<Header />).toBeDefined();
  });
});
