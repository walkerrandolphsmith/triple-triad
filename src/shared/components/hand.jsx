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

            name = showBack ? 'back' : name;

            let backgroundColor = owner === 1 ? 'linear-gradient( 45deg, white, #608FC6 )' : 'linear-gradient( 45deg, white, #CC181E )';

            const cardStyle = {
                backgroundImage: `url(assets/images/cards/${name}.png), ${backgroundColor}`,
                cursor: owner === 1 ? 'pointer' : 'default'
            };

            let classes = [];

            if(card.id === selectedCard) classes.push('selected');

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