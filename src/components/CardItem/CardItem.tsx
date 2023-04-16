import React, { FC } from 'react';
import { CardsType } from '../../pages/MainPage/MainPage';
import styles from './CardItem.module.scss';

type CardItemProps = {
  cardItem: CardsType;
};

const CardItem: FC<CardItemProps> = ({ cardItem }) => {
  return (
    <div className={styles.card} data-testid="cardItem">
      <div className={styles.image}>
        <img src={cardItem.images[0]} alt={cardItem.title} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{cardItem.title}</div>
        <ul className={styles.description}>
          <li>Brand: {cardItem.brand}</li>
          <li>Category: {cardItem.category}</li>
          <li>Description: {cardItem.description}</li>
          <li>Stock: {cardItem.stock}</li>
          <li>Rating: {cardItem.rating}</li>
          <li>Discount: {cardItem.discountPercentage}%</li>
        </ul>
        <div className={styles.priceBlock}>
          <div className={styles.price}>${cardItem.price}</div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
