import React from 'react';

export class Card extends React.Component {

    render() {

        let { gameOwner, card, classes, cardStyle, clickAction } = this.props;

        const backgroundColor = (card.owner === 0 || card.owner === gameOwner) ? 'linear-gradient( 45deg, white, #608FC6 )' : 'linear-gradient( 45deg, white, #CC181E )';

        const defaultStyle = {
            backgroundImage: `url(../assets/images/cards/${card.name}.png), ${backgroundColor}`
        };
        const overrideStyle = cardStyle || {};
        const finalStyles = Object.assign(defaultStyle, overrideStyle);

        const cardId = `card-${card.id}`;
        const className = `card-wrapper ${classes}`;

        return (
            <div id={cardId} className={className} onClick={clickAction}>
                <div className='card'>
                    <div className="front" style={finalStyles}></div>
                    <div className="back"></div>
                </div>
            </div>
        );
    }
}