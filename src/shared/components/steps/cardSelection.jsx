import React from 'react';
import Cards from './../cards';

export default class CardSelection extends React.Component {
    render() {
        let cards = this.props.game.deck || [];

        return (
            <div id="step-1">
                <Cards cards={cards} />
                <button onClick={this.props.nextStep}> Next step</button>
            </div>
        );
    }
}