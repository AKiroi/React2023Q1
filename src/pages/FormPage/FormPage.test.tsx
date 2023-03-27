import React from 'react';
import { describe, it } from 'vitest';

import FormPage from '../FormPage/FormPage';

describe('FormPage', () => {
  it('Should defined', () => {
    expect(<FormPage />).toBeDefined();
  });
});
