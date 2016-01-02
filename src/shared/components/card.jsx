import React from 'react';

export default class Card extends React.Component {

    click() {
        let {clickAction, card} = this.props;
        clickAction(card.id);
    };

    render() {
        let {card, showBack} = this.props;
        let {id, name, owner} = card;

        name = showBack ? 'back' : name;

        const cardStyle = {
            backgroundImage: `url(assets/images/${name}.png)`,
            backgroundColor: owner === 2 ? 'red' : 'blue'
        };

        return (
            <div key={id} className='card-wrapper' onClick={this.click.bind(this)}>
                <div className='card' style={cardStyle}></div>
            </div>
        )
    }
}