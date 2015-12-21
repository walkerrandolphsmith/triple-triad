import React from 'react';
import Card from './card';

export default class Cards extends React.Component {
    render() {
        let cards = this.props.cards || [];
        let owner = this.props.owner || 0;
        let clickAction = this.props.clickAction;

        let cardsMarkup = cards.map((card, index) => {
            return (
                <Card index={index} name={card.name} owner={owner} clickAction={clickAction} />
            )
        });

        return (
            <div id="deck">
            {cardsMarkup}
            </div>
        );
    }
}