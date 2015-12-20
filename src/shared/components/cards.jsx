import React from 'react';
import Card from './card';

export default class Cards extends React.Component {
    render() {
        let cards = this.props.cards || [];

        let cardsMarkup = cards.map((card, index) => {
            return (
                <Card key={index} name={card.name} owner={0} />
            )
        });

        return (
            <div id="deck">
            {cardsMarkup}
            </div>
        );
    }
}