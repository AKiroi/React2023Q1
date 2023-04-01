import React, { useState } from 'react';
import { CardType } from '../../data/types';
import { dataCards } from '../../data/data';
import Card from '../Card/Card';

import styles from './cards.module.scss';

interface CardsState {
  cards: CardType[];
}

const Cards = () => {
  const [cards, setCards] = useState<CardType[]>(dataCards);
  
  return (
    <div className={styles.cards} data-testid="cards">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Cards;
