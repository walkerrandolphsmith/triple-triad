import React from 'react';
import { Card } from './card';
import Slider from 'react-slick';

export class Deck extends React.Component {

    click(card) {
        const owner = card.owner === 0 ? this.props.loggedInUser : 0;
        this.props.addCard(card.id, owner);
    };

    render() {
        const { gameOwner, cards, selectedCard, isHandSelected } = this.props;

        const cardsMarkup = cards.map((card, i) => {
            const isSelectable = (card.owner === 1) || (!isHandSelected && card.owner === 0);
            const classes = card.id === selectedCard ? 'selected' : '';
            const cardStyle = {
                opacity: card.owner === 0 ? '1' : '0.5',
                cursor: isSelectable ? 'pointer' : 'default'
            };
            const action = isSelectable ? this.click.bind(this, card) : ()=> {};
            //Adding a key breaks react-slick...
            return (
                <div>
                    <Card gameOwner={gameOwner} card={card} cardStyle={cardStyle} classes={classes} clickAction={action} />
                </div>
            );
        });

        const arrowIcon = {
            lineHeight: '127px',
            height: '127px',
            textAlign: 'center',
            width: '100%',
            fontWeight: 200,
            fontSize: '2em'
        };
        
        const nextArrow = (<div><i className="fa fa-angle-right" style={arrowIcon}></i></div>);
        const prevArrow = (<div><i className="fa fa-angle-left" style={arrowIcon}></i></div>);
        
        const settings = {
            className: 'center',
            centerMode: true,
            infinite: true,
            arrows: true,
            nextArrow: nextArrow,
            prevArrow: prevArrow,
            dots: false,
            variableWidth: true,
            slidesToShow: 8,
            slidesToScroll: 8,
            responsive: [{
                breakpoint: 1200,
                settings: { slidesToScroll: 7 }
            }, {
                breakpoint: 1024,
                settings: { slidesToScroll: 5 }
            }, {
                breakpoint: 768,
                settings: { slidesToScroll: 3 }
            }, {
                breakpoint: 480,
                settings: { slidesToScroll: 1 }
            }]
        };
        return (
            <div>
                <Slider {...settings}>
                    {cardsMarkup}
                </Slider>
            </div>
        );
    }
}