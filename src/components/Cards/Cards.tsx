import React, { FC } from 'react';
import { dataCards } from '../../data/data';
import Card from '../Card/Card';
import { CardsType } from '../../pages/MainPage/MainPage';

import styles from './cards.module.scss';

type CardsProp = {
  cards: CardsType[];
}

const Cards: FC<CardsProp> = ({ cards }) => {
  return (
    <div className={styles.cards} data-testid="cards">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Cards;
