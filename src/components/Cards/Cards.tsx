import { CardType } from '../../data/types';
import { dataCards } from '../../data/data';
import React from 'react';
import Card from '../Card/Card';

import styles from './Cards.module.scss';

interface CardsState {
  cards: CardType[];
}

export default class Cards extends React.Component {
  state: CardsState = {
    cards: [],
  };

  componentDidMount = () => {
    this.setState({ cards: dataCards });
  };

  render() {
    return (
      <div className={styles.cards}>
        {this.state.cards.map((card) => (
          <Card key={card.id} card={card}/>
        ))}
      </div>
    );
  }
}
