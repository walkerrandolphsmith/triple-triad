import React from 'react';
export default class Card extends React.Component {

    render() {

        let { card, cardStyle, clickAction } = this.props;

        return (
            <div key={card.id} className='card-wrapper' onClick={clickAction}>
                <div className='card' style={cardStyle}></div>
            </div>
        );
    }
}