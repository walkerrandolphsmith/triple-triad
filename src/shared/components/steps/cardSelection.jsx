import React from 'react';
import Cards from './../cards';

export default class CardSelection extends React.Component {
    render() {
        let cards = this.props.game.availableDeck || [];
        let hand = this.props.game.hand || [];
        let handSelected = this.props.game.handSelected;

        let addCardHandler = handSelected ? function(){} : this.props.addCard;

        return (
            <div id="step-1">
                <Cards cards={cards} showBack={false} owner={0} clickAction={addCardHandler} />
                <Cards cards={hand} showBack={false} owner={0} clickAction={this.props.removeCard} />
                <button disabled={!handSelected} onClick={this.props.nextStep}> Next step</button>
            </div>
        );
    }
}