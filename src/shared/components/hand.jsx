import React from 'react';
import { Card } from './card';

export class Hand extends React.Component {

    click(id) {
        this.props.clickAction(id);
    };

    render() {
        let { loggedInUser, gameOwner, score, cards, selectedCard, showBack} = this.props;
        let hand = [];
        let cardMarkup;
        for(var i = 0; i < 5; i++){
            const card = cards.get(i);
            if(card) {
                let name = showBack ? 'back' : card.name;

                const cardStyle = {
                    cursor: card.owner === loggedInUser ? 'pointer' : 'default'
                };

                const classes = card.id === selectedCard ? 'selected' : '';

                cardMarkup = (
                    <Card key={card.id}
                          gameOwner={gameOwner}
                          card={card.set('name', name)}
                          classes={classes}
                          cardStyle={cardStyle}
                          clickAction={this.click.bind(this, card.id)} />
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