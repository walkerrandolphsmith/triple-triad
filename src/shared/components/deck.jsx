import React from 'react';
import Card from './card';

export default class Deck extends React.Component {

    click(card) {
        let owner = card.owner === 0 ? 1 : 0;
        this.props.addCard(card.id, owner);
    };

    render() {
        let {cards, isHandSelected} = this.props;

        let cardsMarkup = cards.map(card => {

            const {id, name, owner} = card;
            const isSelectable = (owner === 1) || (!isHandSelected && owner === 0);

            const cardStyle = {
                backgroundImage: `url(assets/images/${name}.png)`,
                backgroundColor: owner === 2 ? 'red' : 'blue',
                opacity: owner === 0 ? '1' : '0.5',
                cursor: isSelectable ? 'pointer' : 'default'
            };

            return (
                <div key={id} className='card-wrapper' onClick={this.click.bind(this, card)}>
                    <div className='card' style={cardStyle}></div>
                </div>
            )
        });

        return (
            <div className="cards">
            {cardsMarkup}
            </div>
        );
    }
}