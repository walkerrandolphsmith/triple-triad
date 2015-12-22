import React from 'react';
import Board from './../board';
import Cards from './../cards';

export default class Round extends React.Component {
    render() {
        let {selectCard, selectPiece} = this.props;
        let {hand, opponentHand, turn} = this.props.game;
        let showFront = this.props.game.settings.visibleHand;

        return (
            <div id="step-2">
                <div id="hand">
                    <Cards cards={hand} showBack={false} owner={0} clickAction={selectCard}/>
                </div>

                <Board validPieces={turn.validPieces} canSelectPiece={turn.canSelectPiece} selectPiece={selectPiece}/>

                <div id="opponent-hand">
                    <Cards cards={opponentHand} showBack={showFront} owner={1}  />
                </div>
            </div>
        );
    }
}