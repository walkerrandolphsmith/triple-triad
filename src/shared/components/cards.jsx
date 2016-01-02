import React from 'react';
import Card from './card';

export default class Cards extends React.Component {
    render() {
        let {cards, showBack, clickAction} = this.props;

        let cardsMarkup = cards.map(card => {
            return (
                <Card key={card.id} card={card} showBack={showBack} clickAction={clickAction} />
            )
        });

        return (
            <div className="cards">
            {cardsMarkup}
            </div>
        );
    }
}