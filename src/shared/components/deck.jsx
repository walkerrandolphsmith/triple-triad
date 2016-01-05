import React from 'react';
import Card from './card';

export default class Deck extends React.Component {

    click(id) {
        this.props.clickAction(id);
    };

    render() {
        let {cards, isHandSelected, clickAction} = this.props;

        let cardsMarkup = cards.map(card => {

            const {id, name, owner} = card;
            const isSelectable = !isHandSelected && card.owner === 0;

            const cardStyle = {
                backgroundImage: `url(assets/images/${name}.png)`,
                backgroundColor: owner === 2 ? 'red' : 'blue',
                opacity: isSelectable ? '1' : '0.5'
            };

            return (
                <div key={id} className='card-wrapper' onClick={this.click.bind(this, id)}>
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