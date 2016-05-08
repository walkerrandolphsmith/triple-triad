import React from 'react';
import { Card } from './card';

export class Hand extends React.Component {

    click(id) {
        this.props.clickAction(id);
    };

    render() {
        let { score, cards, selectedCard, showBack} = this.props;
        let hand = [];
        let cardMarkup;
        for(var i = 0; i < 5; i++){
            const card = cards.get(i);
            if(card) {
                let name = showBack ? 'back' : card.get('name');

                const cardStyle = {
                    cursor: card.get('owner') === 1 ? 'pointer' : 'default'
                };

                const classes = card.get('id') === selectedCard ? 'selected' : '';

                cardMarkup = (
                    <Card key={card.get('id')}
                          card={card.set('name', name)}
                          classes={classes}
                          cardStyle={cardStyle}
                          clickAction={this.click.bind(this, card.get('id'))}
                    />
                );
            }else {
                cardMarkup = (<div></div>);
            }
            hand.push(
                <div className="card-placeholder">
                    {cardMarkup}
                </div>
            );
        }
        return (
            <div className="hand">
                <div className="score">{score}</div>
                {hand}
            </div>
        );
    }
}