import React from 'react';
import Card from './card';

export default class Cards extends React.Component {
    render() {
        let cards = this.props.cards || [];
        let clickAction = this.props.clickAction;

        let cardsMarkup = cards.map((card, index) => {
            return (
                <Card key={index} name={card.name} owner={0} clickAction={clickAction} />
            )
        });

        return (
            <div id="deck">
            {cardsMarkup}
            </div>
        );
    }
}