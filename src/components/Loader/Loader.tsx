import React from 'react';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader} data-testid="loader"></span>;
    </div>
  );
};

export default Loader;
