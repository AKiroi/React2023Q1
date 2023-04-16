import searchReducer, { setSearch } from './searchSlice';

describe('searchSlice reducer', () => {
  it('should be handle setSearch', () => {
    const search = searchReducer(
      {
        search: '',
      },
      setSearch('find...')
    );
    expect(search.search).toEqual('find...');
  });
});
