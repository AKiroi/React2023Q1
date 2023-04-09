import React, { ChangeEvent, FC  } from 'react';

import styles from './Search.module.scss';

interface SearchProps  {
  setSearchValue: (searchValue: string) => void ;
  searchValue: string;
};

const Search: FC<SearchProps> = ({ searchValue, setSearchValue }) => {

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input type="text" value={searchValue || ''} placeholder="Find..." onChange={handleSearchValue} />
    </div>
  );
};

export default Search;
