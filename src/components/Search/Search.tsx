import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../store/searchSlice';
import { RootState, AppDispatch } from '../../store/store';

import styles from './Search.module.scss';

const Search: FC = () => {
  const { search } = useSelector((state: RootState) => state.search);
  const [searchValue, setSearchValue] = useState<string>(search);
  const dispatch = useDispatch<AppDispatch>();

  const handlerSearchValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const handlerSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(setSearch(searchValue));
  };

  return (
    <form className={styles.search} onSubmit={handlerSubmit} data-testid="search">
      <input
        type="text"
        value={searchValue || ''}
        placeholder="Find..."
        onChange={handlerSearchValue}
      />
      <button className={styles.button}>Search</button>
    </form>
  );
};

export default Search;
