import React, { FC } from 'react';
import Card from '../Card/Card';
import { CardsType } from '../../pages/MainPage/MainPage';

import styles from './cards.module.scss';

type CardsProp = {
  cards: CardsType[];
  setCardId: (cardId: number) => void;
  setIsModal: (isModal: boolean) => void;
};

const Cards: FC<CardsProp> = ({ cards, setCardId, setIsModal }) => {
  return (
    <div className={styles.cards} data-testid="cards">
      {cards.map((card) => (
        <Card card={card} key={card.id} setIsModal={setIsModal} setCardId={setCardId} />
      ))}
    </div>
  );
};

export default Cards;
