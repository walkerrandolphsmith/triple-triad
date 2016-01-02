import React from 'react';
import Card from './card';

export default class Cards extends React.Component {
    render() {
        let {cards, showBack, clickAction} = this.props;

        let cardsMarkup = cards.map((card, index) => {
            return (
                <Card key={card.id} id={card.id} name={card.name} owner={card.owner} showBack={showBack} clickAction={clickAction} />
            )
        });

        return (
            <div className="cards">
            {cardsMarkup}
            </div>
        );
    }
}