import React from 'react';

export default class Deck extends React.Component {
  render() {
    let game = this.props.game;

    let cardStyle = {
      width: '100px',
      height: '127px',
      display: 'inline'
    }

    let cards = game.deck.map((card, index) => {
      return (
        <div key={index} style={cardStyle}>
          <img src={`assets/${card.name}.jpg`} alt={card.name} />
        </div>
      )
    });

    return (
      <div id="deck">
        {cards}
      </div>
    );
  }
}
