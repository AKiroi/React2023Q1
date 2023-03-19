import React from 'react';

import styles from './ErrorPage.module.scss';

export default class ErrorPage extends React.Component {
  render() {
    return <div className={styles.error}>Page Not Found</div>;
  }
}
