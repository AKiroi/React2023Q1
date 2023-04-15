import React, { useEffect, useRef, useState } from 'react';
import { getData } from '../../utils/getData';
import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

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
  const [search, setSearch] = useState<string>(localStorage.getItem('searchValue') || '');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [cardId, setCardId] = useState<number>(0);
  const [cards, setCards] = useState<CardsType[]>([]);
  const searchRef = useRef<string>();

  useEffect(() => {
    const getCards = async (search: string): Promise<void> => {
      setIsLoading(true);
      try {
        const data = await getData(search);
        setCards(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCards(search);
    searchRef.current = search;
    localStorage.setItem('searchValue', searchRef.current || '');
  }, [search]);

  const Content = () => {
    return cards.length > 0 ? (
      <Cards cards={cards} setIsModal={setIsModal} setCardId={setCardId} />
    ) : (
      <div>The goods is missing!</div>
    );
  };

  return (
    <div className={styles.main} data-testid="mainPage">
      {isModal && <Modal setIsModal={setIsModal} cardId={cardId} />}
      <Search setSearch={setSearch} />
      {isLoading ? <Loader /> : <Content />}
    </div>
  );
};

export default MainPage;
