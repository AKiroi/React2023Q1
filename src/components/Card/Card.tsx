import React from 'react';

import styles from './Card.module.scss';

export default class Card extends React.Component {
  render() {
    return (
      <div className={styles.card}>
        Card
      </div>
    );
  }
}
