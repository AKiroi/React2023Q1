import React from 'react';
import Card from '../Card/Card';

import styles from './Cards.module.scss';

export default class Cards extends React.Component {
  render() {
    const cards = [1, 2, 3];
    return (
      <div className={styles.cards}>
        {cards.map((card) => (
          <Card key={card} />
        ))}
      </div>
    );
  }
}
