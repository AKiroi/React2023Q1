import React from 'react';

import styles from './Loader.module.scss';

const Loader = () => {
  return <span className={styles.loader} data-testid="loader"></span>;
};

export default Loader;
