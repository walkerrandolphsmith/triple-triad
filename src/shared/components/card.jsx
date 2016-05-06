import React from 'react';

export class Card extends React.Component {

    render() {

        let { card, classes, cardStyle, clickAction } = this.props;

        const backgroundColor = card.get('owner') < 2 ? 'linear-gradient( 45deg, white, #608FC6 )' : 'linear-gradient( 45deg, white, #CC181E )';

        const defaultStyle = {
            backgroundImage: `url(../assets/images/cards/${card.get('name')}.png), ${backgroundColor}`
        };
        const overrideStyle = cardStyle || {};
        const finalStyles = Object.assign(defaultStyle, overrideStyle);

        const cardId = `card-${card.get('id')}`;
        const className = `card-wrapper ${classes}`;

        return (
            <div id={cardId} className={className} onClick={clickAction}>
                <div className='card' style={finalStyles}></div>
            </div>
        );
    }
}