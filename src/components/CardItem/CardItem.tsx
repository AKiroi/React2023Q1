import React, { FC, useEffect, useState } from 'react';
import { getDataById } from '../../utils/getData';
import { CardsType } from '../../pages/MainPage/MainPage';
import Loader from '../Loader/Loader';

import styles from './CardItem.module.scss';

type CardItemProps = {
  cardId: number;
};

const CardItem: FC<CardItemProps> = ({ cardId }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cardItem, setCardItem] = useState<CardsType>({} as CardsType);
  const [image, setImage] = useState('');

  useEffect(() => {
    const getCardItem = async (cardId: number): Promise<void> => {
      setIsLoading(true);
      try {
        const data = await getDataById(cardId.toString());
        setCardItem(data);
        setImage(data.images[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCardItem(cardId);
  }, [cardId]);

  const Content = () => (
    <div className={styles.card} data-testid="cardItem">
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

  return <>{isLoading ? <Loader /> : <Content />}</>;
};

export default CardItem;
