import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';
import React from 'react';

import styles from './Main.module.scss';

export default class Main extends React.Component {
  render = () => (
    <div className={styles.main}>
      <Search />
      <Cards />
    </div>
  );
}
