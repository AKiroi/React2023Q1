import React from 'react';

import styles from './Error.module.scss';

export default class NotFound extends React.Component {
  render = () => (
    <div className={styles.error}>
     Not NotFound
    </div>
  );
}
