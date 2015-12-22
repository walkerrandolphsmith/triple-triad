import React from 'react';
import Card from './card';

export default class Cards extends React.Component {
    render() {
        let {cards, owner, showBack, clickAction} = this.props;

        let cardsMarkup = cards.map((card, index) => {
            return (
                <Card index={index} name={card.name} owner={owner} showBack={showBack} clickAction={clickAction} />
            )
        });

        return (
            <div className="deck">
            {cardsMarkup}
            </div>
        );
    }
}