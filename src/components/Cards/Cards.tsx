import React from 'react';
import { CardType } from '../../data/types';
import { dataCards } from '../../data/data';
import Card from '../card/Card';

import styles from './cards.module.scss';

interface CardsState {
  cards: CardType[];
}

export default class Cards extends React.Component {
  state: CardsState = {
    cards: [],
  };

  componentDidMount(): void {
    this.setState({ cards: dataCards });
  }
  render() {
    return (
      <div className={styles.cards} data-testid="cards">
        {this.state.cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    );
  }
}
