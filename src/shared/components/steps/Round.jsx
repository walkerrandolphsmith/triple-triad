import React from 'react';
import Cards from './../cards';

export default class Round extends React.Component {
    render() {

        let hand = this.props.game.hand || [];
        let opponentHand = this.props.game.opponentHand || [];

        return (
            <div id="step-2">
                <Cards cards={hand} />
                <Cards cards={opponentHand} owner={1} />
            </div>
        );
    }
}