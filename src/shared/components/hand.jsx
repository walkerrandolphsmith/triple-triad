import React from 'react';
import Card from './card';

export default class Hand extends React.Component {
    render() {
        let {score, cards, showBack, clickAction} = this.props;

        let cardsMarkup = cards.map(card => {
            return (
                <Card key={card.id} card={card} showBack={showBack} clickAction={clickAction} />
            )
        });

        return (
            <div className="hand">
                <div className="score">{score}</div>
                {cardsMarkup}
            </div>
        );
    }
}