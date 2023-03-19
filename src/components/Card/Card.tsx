import React from 'react';
import { CardType } from '../../data/types';
import styles from './Card.module.scss';

interface CardProps {
  card: CardType;
}

export default class Card extends React.Component<CardProps> {
  render() {
    const { name, brand, category, photo, inStock, rating, price } = this.props.card;
    return (
      <div className={styles.card} data-testid="card">
        <div className={styles.contentWrapper}>
          <div className={styles.image}>
            <img src={photo} alt={brand} />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{name}</div>
            <ul className={styles.description}>
              <li>Brand: {brand}</li>
              <li>Category: {category}</li>
              <li>Stock: {inStock}</li>
              <li>Rating: {rating}</li>
            </ul>
          </div>
        </div>
        <div className={styles.priceBlock}>
          <div className={styles.price}>${price}</div>
        </div>
      </div>
    );
  }
}
