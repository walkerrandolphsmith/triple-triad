import React from 'react';
import Board from './../board';
import Cards from './../cards';

export default class Round extends React.Component {
    render() {
        let {hand, opponentHand, turn} = this.props.game;
        let showFront = this.props.game.settings.visibleHand;

        return (
            <div id="step-2">
                <div id="hand">
                    <Cards cards={hand} showBack={false} owner={0} clickAction={this.props.selectCard}/>
                </div>

                <Board validPieces={turn.validPieces} />

                <div id="opponent-hand">
                    <Cards cards={opponentHand} showBack={showFront} owner={1}  />
                </div>
            </div>
        );
    }
}