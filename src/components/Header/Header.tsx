import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  const [page, setPage] = useState<string>('');
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case '/':
        setPage('main');
        break;
      case '/aboutUs':
        setPage('AboutUs');
        break;
      case '/formPage':
        setPage('FormPage');
        break;
      default:
        setPage('ErrorPage');
    }
  }, [pathname]);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <NavLink to={'/'} className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            Main
          </NavLink>
          <NavLink
            to={'/aboutUs'}
            className={({ isActive }) => (isActive ? styles.active : styles.link)}
          >
            AboutUs
          </NavLink>
          <NavLink
            to={'/formPage'}
            className={({ isActive }) => (isActive ? styles.active : styles.link)}
          >
            Form
          </NavLink>
        </nav>
        <div className={styles.page}>{page} page</div>
      </div>
    </div>
  );
};

export default Header;
