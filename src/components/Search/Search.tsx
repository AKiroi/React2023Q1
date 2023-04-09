import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import styles from './Search.module.scss';

interface SearchProps {
  setSearch: (searchValue: string) => void;
}

const Search: FC<SearchProps> = ({ setSearch }) => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '');

  const handlerSearchValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const handlerSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSearch(searchValue);
  };

  return (
    <form className={styles.search} onSubmit={handlerSubmit}>
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
