import React from 'react';
import Cards from './../cards';

export default class CardSelection extends React.Component {
    render() {
        let cards = this.props.game.availableDeck || [];
        let hand = this.props.game.hand || [];
        let handSelected = this.props.game.handSelected;

        return (
            <div id="step-1">
                <Cards cards={cards} clickAction={this.props.addCard} />
                <Cards cards={hand} clickAction={this.props.removeCard} />
                <button disabled={!handSelected} onClick={this.props.nextStep}> Next step</button>
            </div>
        );
    }
}git