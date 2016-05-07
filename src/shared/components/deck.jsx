import React from 'react';
import { Card } from './card';

export class Deck extends React.Component {

    click(card) {
        let owner = card.get('owner') === 0 ? 1 : 0;
        this.props.addCard(card.get('id'), owner);
    };

    render() {
        let {cards, selectedCard, isHandSelected} = this.props;

        let cardsMarkup = cards.map(card => {

            const isSelectable = (card.get('owner') === 1) || (!isHandSelected && card.get('owner') === 0);

            const cardStyle = {
                opacity: card.get('owner') === 0 ? '1' : '0.5',
                cursor: isSelectable ? 'pointer' : 'default'
            };

            const classes = card.get('id') === selectedCard ? 'selected' : '';

            return (
                <Card key={card.get('id')} card={card} cardStyle={cardStyle} classes={classes} clickAction={isSelectable ? this.click.bind(this, card) : ()=> {} } />
            );
        });

        let arrowWidth = 50;
        let containerStyles = {
            width: `calc(100% - ${arrowWidth * 2}px)`,
            overflow: 'hidden',
            display: 'inline-block'

        };

        let innerStyles = {
            position: 'relative',
            width: `${cards.length * 100}px`,
            display: 'inline-block'
        };

        let arrowStyles = {
            width: `${arrowWidth}px`,
            display: 'inline-block',
            verticalAlign: 'top'
        };

        let arrowIcon = {
            lineHeight: '127px',
            height: '127px',
            textAlign: 'center',
            width: '100%',
            fontWeight: 200,
            fontSize: '2em'
        };

        return (
            <div>
                <div className="arrow" style={arrowStyles}>
                    <i className="fa fa-angle-left" style={arrowIcon}></i>
                </div>
                <div className="cards" style={containerStyles}>
                    <div style={innerStyles}>
                        {cardsMarkup}
                    </div>
                </div>
                <div className="arrow" style={arrowStyles}>
                    <i className="fa fa-angle-right" style={arrowIcon}></i>
                </div>
            </div>
        );
    }
}