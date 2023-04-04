import React from 'react';
import { dataCards } from '../../data/data';
import Card from '../Card/Card';

import styles from './cards.module.scss';

const Cards = () => {
  return (
    <div className={styles.cards} data-testid="cards">
      {dataCards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Cards;
