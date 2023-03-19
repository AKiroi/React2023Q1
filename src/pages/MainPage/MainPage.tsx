import React from 'react';
import Cards from '../../components/cards/Cards';
import Search from '../../components/search/Search';

import styles from './Main.module.scss';

export default class MainPage extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <Search />
        <Cards />
      </div>
    );
  }
}
