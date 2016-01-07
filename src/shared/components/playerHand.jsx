import React from 'react';
import Card from './card';

export default class Hand extends React.Component {

    click(card) {
        this.props.clickAction(card.id);
    };

    componentDidMount() {
        const getNextSelectedCard = this.props.getNextSelectedCard;

        document.addEventListener('keydown', event => {
           const keyCode = event.which;

           switch(keyCode){
               case 38: getNextSelectedCard(-1); break;
               case 40: getNextSelectedCard(1); break;
               case 13: ; break;
           }
        });
    }

    render() {
        let { score, cards, focusedCard, selectedCard} = this.props;

        let cardsMarkup = cards.map((card, i) => {
            let { name } = card;

            const cardStyle = {
                backgroundImage: `url(assets/images/${name}.png)`,
                backgroundColor: 'blue',
                cursor: 'pointer'
            };

            let classes = [];

            if(card.id === selectedCard) classes.push('selected');

            return (<Card card={card} classes={classes} cardStyle={cardStyle} clickAction={this.click.bind(this, card)} />);
        });

        return (
            <div className="hand">
                <div className="score">{score}</div>
                {cardsMarkup}
            </div>
        );
    }
}