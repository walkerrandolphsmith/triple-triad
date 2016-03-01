import React from 'react';
import { Card } from './../card/card';

export class Hand extends React.Component {

    click(id) {
        this.props.clickAction(id);
    };

    render() {
        let { score, cards, selectedCard, showBack} = this.props;

        let cardsMarkup = cards.map((card, i) => {

            let name = showBack ? 'back' : card.get('name');

            const cardStyle = {
                cursor: card.get('owner') === 1 ? 'pointer' : 'default'
            };

            const classes = card.get('id') === selectedCard ? 'selected' : '';

            return (
                <Card key={card.get('id')}
                    card={card.set('name', name)}
                    classes={classes}
                    cardStyle={cardStyle}
                    clickAction={this.click.bind(this, card.get('id'))}
                />
            );
        });

        return (
            <div className="hand">
                <div className="score">{score}</div>
                {cardsMarkup}
            </div>
        );
    }
}