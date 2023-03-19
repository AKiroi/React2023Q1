import React from 'react';

import styles from './ErrorPage.module.scss';

export default class ErrorPage extends React.Component {
  render() {
    return <h3 className={styles.error}>Page Not Found</h3>;
  }
}
