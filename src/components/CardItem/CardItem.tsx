import React, { FC } from 'react';
import Loader from '../Loader/Loader';
import { useGetCardByIdQuery } from '../../services/cardsApi';

import styles from './CardItem.module.scss';

type CardItemProps = {
  cardId: number;
};

const CardItem: FC<CardItemProps> = ({ cardId }) => {
  const { data: cardItem, error, isFetching } = useGetCardByIdQuery(cardId);
  return (
    <>
      {isFetching && <Loader />}
      {!isFetching && !error && cardItem && (
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
      )}
    </>
  );
};

export default CardItem;
