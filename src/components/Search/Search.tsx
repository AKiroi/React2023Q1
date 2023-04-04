import React, { ChangeEvent, useRef, useState, useEffect } from 'react';

import styles from './Search.module.scss';

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '');
  const search = useRef<string>();

  useEffect(() => {
    search.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', search.current || '');
    };
  }, []);

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input type="text" value={searchValue} placeholder="Find..." onChange={handleSearchValue} />
    </div>
  );
};

export default Search;
