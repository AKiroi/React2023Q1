import React from 'react';
import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';

import styles from './Main.module.scss';

const MainPage = () => {
  return (
    <div className={styles.main} data-testid="mainPage">
      <Search />
      <Cards />
    </div>
  );
};

export default MainPage;
