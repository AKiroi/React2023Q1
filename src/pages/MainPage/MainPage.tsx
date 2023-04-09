import React, { useCallback, useEffect, useRef, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';
import Loader from '../../components/Loader/Loader';

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
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cards, setCards] = useState<CardsType[]>([]);
  const searchRef = useRef<string>();

  const getCards = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`);
      const data = await res.json();
      setCards(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCards();
    searchRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchRef.current || '');
    };
  }, []);

  const Content = () => {
    return cards.length > 0 ? <Cards cards={cards} /> : <div>The card is empty</div>;
  };

  return (
    <div className={styles.main} data-testid="mainPage">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {isLoading ? <Loader /> : <Content />}
    </div>
  );
};

export default MainPage;
