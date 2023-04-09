import React from 'react';
import { CardType } from '../../data/types';
import { CardsType } from '../../pages/MainPage/MainPage';
import styles from './Card.module.scss';

type CardProps = {
  card: CardsType;
}

const Card = (props: CardProps) => {
  const { title, brand, category, images, stock, rating, price } = props.card;
  return (
    <div className={styles.card} data-testid="card">
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
