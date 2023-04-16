import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type SearchSlice = {
  search: string;
}

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: '',
  } as SearchSlice,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;