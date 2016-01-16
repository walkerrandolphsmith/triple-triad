import React from 'react';
import Card from './card';

export default class Deck extends React.Component {

    click(card) {
        let owner = card.owner === 0 ? 1 : 0;
        this.props.addCard(card.id, owner);
    };

    render() {
        let {cards, selectedCard, isHandSelected} = this.props;

        let cardsMarkup = cards.map(card => {

            const { name, owner } = card;
            const isSelectable = (owner === 1) || (!isHandSelected && owner === 0);

            const cardStyle = {
                backgroundImage: `url(assets/images/${name}.png), linear-gradient( 45deg, white, #608FC6 )`,
                opacity: owner === 0 ? '1' : '0.5',
                cursor: isSelectable ? 'pointer' : 'default'
            };

            let classes = [];

            if(card.id === selectedCard) classes.push('selected');

            return (
                <Card key={card.id} card={card} cardStyle={cardStyle} classes={classes} clickAction={isSelectable ? this.click.bind(this, card) : ()=> {} } />
            );
        });

        return (
            <div className="cards">
            {cardsMarkup}
            </div>
        );
    }
}