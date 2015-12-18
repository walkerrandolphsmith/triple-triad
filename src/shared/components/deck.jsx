import React from 'react';
import CardsView from './cards';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({ store: state }))

export default class Deck extends React.Component {
  render() {
    let cards = this.props.store.game.deck;

    return (
        <div id="deck">
          <CardsView cards={cards} />
        </div>
    );
  }
}

