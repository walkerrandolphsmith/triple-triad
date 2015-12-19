import React from 'react';

export default class Cards extends React.Component {
    render() {
        let cards = this.props.cards;

        let cardStyle = {
            width: '100px',
            height: '127px',
            display: 'inline'
        };

        cards = cards || [];

        let cardsMarkup = cards.map((card, index) => {
            return (
                <div key={index} style={cardStyle}>
                    <img src={`assets/images/${card.name}.png`} alt={card.name} />
                </div>
            )
        });

        return (
            <div id="deck">
            {cardsMarkup}
            </div>
        );
    }
}