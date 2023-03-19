import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from '../../utils/withRoute';
import { WithRouterProps } from '../../utils/withRoute';

import styles from './Header.module.scss';

class Header extends React.Component<WithRouterProps> {
  render() {
    const { pathname } = this.props.location;
    let page;
    switch (pathname) {
      case '/':
        page = 'main';
        break;
      case '/aboutUs':
        page = 'AboutUs';
        break;
      default:
        page = 'ErrorPage';
    }

    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <NavLink
              to={'/'}
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              Main
            </NavLink>
            <NavLink
              to={'/aboutUs'}
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              AboutUs
            </NavLink>
          </nav>
          <div className={styles.page}>{page} page</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
