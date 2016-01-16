import React from 'react';
import Card from './card';

export default class Hand extends React.Component {

    click(card) {
        this.props.clickAction(card.id);
    };

    render() {
        let { score, cards, selectedCard, showBack} = this.props;

        let cardsMarkup = cards.map((card, i) => {
            let { name, owner } = card;

            card.name = showBack ? 'back' : name;

            const cardStyle = {
                cursor: owner === 1 ? 'pointer' : 'default'
            };

            const classes = card.id === selectedCard ? 'selected' : '';

            return (<Card key={card.id} card={card} classes={classes} cardStyle={cardStyle} clickAction={this.click.bind(this, card)} />);
        });

        return (
            <div className="hand">
                <div className="score">{score}</div>
                {cardsMarkup}
            </div>
        );
    }
}