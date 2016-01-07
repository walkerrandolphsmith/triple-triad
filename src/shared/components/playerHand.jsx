import React from 'react';
import Card from './card';

export default class Hand extends React.Component {

    click(card) {
        this.props.clickAction(card.id);
    };

    componentDidMount() {
        document.addEventListener('keydown', event => {
           const keyCode = event.which;

           switch(keyCode){
               case 38: ; break;
               case 40: ; break;
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
                backgroundColor: i === focusedCard ? 'green' : 'blue',
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