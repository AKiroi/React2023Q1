import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getData } from '../../utils/getData';
import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import { RootState } from '../../store/store';
import { useGetProductsQuery } from '../../services/cardsApi';

import styles from './Main.module.scss';

export type CardsType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const MainPage = () => {
  const { search } = useSelector((state: RootState) => state.search);
  console.log(search);
  const { data: cards, error, isLoading } = useGetProductsQuery(search);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [cardId, setCardId] = useState<number>(0);

  const Content = () => {
    return cards && cards.length > 0 ? (
      <Cards cards={cards} setIsModal={setIsModal} setCardId={setCardId} />
    ) : (
      <div>The goods is missing!</div>
    );
  };

  return (
    <div className={styles.main} data-testid="mainPage">
      {isModal && <Modal setIsModal={setIsModal} cardId={cardId} />}
      <Search />
      {isLoading ? <Loader /> : <Content />}
    </div>
  );
};

export default MainPage;
