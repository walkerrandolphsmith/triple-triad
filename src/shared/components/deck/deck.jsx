import React from 'react';
import Card from './../card/card';

export default class Deck extends React.Component {

    click(card) {
        let owner = card.get('owner') === 0 ? 1 : 0;
        this.props.addCard(card.get('id'), owner);
    };

    render() {
        let {cards, selectedCard, isHandSelected} = this.props;

        let cardsMarkup = cards.map(card => {

            const isSelectable = (card.get('owner') === 1) || (!isHandSelected && card.get('owner') === 0);

            const cardStyle = {
                opacity: card.get('owner') === 0 ? '1' : '0.5',
                cursor: isSelectable ? 'pointer' : 'default'
            };

            const classes = card.get('id') === selectedCard ? 'selected' : '';

            return (
                <Card key={card.get('id')} card={card} cardStyle={cardStyle} classes={classes} clickAction={isSelectable ? this.click.bind(this, card) : ()=> {} } />
            );
        });

        return (
            <div className="cards">
            {cardsMarkup}
            </div>
        );
    }
}