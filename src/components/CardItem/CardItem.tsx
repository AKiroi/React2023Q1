import React, { FC, useCallback, useEffect, useState } from 'react';
import { CardsType } from '../../pages/MainPage/MainPage';

import styles from './CardItem.module.scss';

type CardItemProps = {
  cardId: number;
};

const CardItem: FC<CardItemProps> = ({ cardId }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cardItem, setCardItem] = useState<CardsType>({} as CardsType);
  const [image, setImage] = useState('');

  const getItemById = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/products/${cardId}`);
      const data = await res.json();
      setCardItem(data);
      setImage(data.images[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getItemById();
    console.log(cardItem);
  }, []);

  return (
    <div className={styles.card} data-testid="card">
      <div className={styles.image}>
        <img src={image} alt={cardItem.title} />
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
