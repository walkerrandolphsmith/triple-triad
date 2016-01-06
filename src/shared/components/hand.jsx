import React from 'react';
import Card from './card';

export default class Hand extends React.Component {

    click(card) {
        this.props.clickAction(card.id);
    };

    render() {
        let {score, cards, showBack, clickAction} = this.props;

        let cardsMarkup = cards.map(card => {
            let { name, owner} = card;

            name = showBack ? 'back' : name;

            const cardStyle = {
                backgroundImage: `url(assets/images/${name}.png)`,
                backgroundColor: owner === 1 ? 'blue' : 'red',
                cursor: owner === 1 ? 'pointer' : 'default'
            };

            return (<Card card={card} cardStyle={cardStyle} clickAction={this.click.bind(this, card)} />);
        });

        return (
            <div className="hand">
                <div className="score">{score}</div>
                {cardsMarkup}
            </div>
        );
    }
}