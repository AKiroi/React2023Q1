import { getData, getDataById } from './getData';
import { vi } from 'vitest';

const mockDataArr = {
  products: [{ id: 1, title: 'HP Pavilion 15-DK1056WM', category: 'laptops' }],
};
const mockData = { id: 1, title: 'HP Pavilion 15-DK1056WM', category: 'laptops' };

describe('getData and getDataById', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('getData return data', async () => {
    const json = Promise.resolve(mockDataArr);
    const responseData = Promise.resolve({
      json: () => json,
    });
    global.fetch = vi.fn().mockImplementation(() => responseData);
    const data = await getData('find...');
    expect(Array.isArray(data)).toBe(true);
  });

  it('getDataById return data', async () => {
    const json = Promise.resolve(mockData);
    const responseData = Promise.resolve({
      json: () => json,
    });
    global.fetch = vi.fn().mockImplementation(() => responseData);

    const data = await getDataById('1');
    expect(typeof data).toBe('object');
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('title');
    expect(data).toHaveProperty('category');
  });
});
