import React, { FC } from 'react';
import { CardsType } from '../../pages/MainPage/MainPage';
import styles from './Card.module.scss';

export type CardProps = {
  card: CardsType;
  setCardId: (cardId: number) => void;
  setIsModal: (isModal: boolean) => void;
};

const Card: FC<CardProps> = ({ card, setCardId, setIsModal }) => {
  const { id, title, brand, category, images, stock, rating, price } = card;
  const handlerOnClick = () => {
    setCardId(id);
    setIsModal(true);
  };
  return (
    <div className={styles.card} onClick={handlerOnClick} data-testid="card">
      <div className={styles.contentWrapper}>
        <div className={styles.image}>
          <img src={images[0]} alt={brand} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <ul className={styles.description}>
            <li>Brand: {brand}</li>
            <li>Category: {category}</li>
            <li>Stock: {stock}</li>
            <li>Rating: {rating}</li>
          </ul>
        </div>
      </div>
      <div className={styles.priceBlock}>
        <div className={styles.price}>${price}</div>
      </div>
    </div>
  );
};

export default Card;
