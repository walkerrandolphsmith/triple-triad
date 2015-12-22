import React from 'react';
import Board from './../board';
import Cards from './../cards';

export default class Round extends React.Component {
    render() {

        let hand = this.props.game.hand || [];
        let opponentHand = this.props.game.opponentHand || [];

        return (
            <div id="step-2">
                <div id="hand">
                    <Cards cards={hand} />
                </div>

                <Board />

                <div id="opponent-hand">
                    <Cards cards={opponentHand} owner={1} />
                </div>
            </div>
        );
    }
}