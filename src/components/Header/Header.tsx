import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <nav className={styles.nav}>
            <NavLink to="/">
              Main
            </NavLink>
            <NavLink to="/aboutUs">
              About Us
            </NavLink>
        </nav>
      </div>
    );
  }
}
