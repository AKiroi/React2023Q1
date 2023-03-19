import React, { ChangeEvent } from 'react';

import styles from './Search.module.scss';

export default class Search extends React.Component {
  state = { value: '' };

  componentDidMount(): void {
    const value = localStorage.getItem('searchValue');
    this.setState({ value: value ? value : '' });
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchValue', this.state.value);
  }

  handleSearchValue = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: event.target.value });
  };

  render(): React.ReactNode {
    return (
      <div className={styles.search}>
        <input
          type="search"
          value={this.state.value}
          placeholder="Find..."
          onChange={this.handleSearchValue}
        />
      </div>
    );
  }
}
