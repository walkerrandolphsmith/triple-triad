import React from 'react';
import Board from './../board';
import Cards from './../cards';

export default class Round extends React.Component {
    render() {
        let {selectCard, selectPiece, applyRules, aiTurn, calculateScore} = this.props;
        let {hand, opponentHand, turn, board, score} = this.props.game;
        let showFront = this.props.game.settings.visibleHand;

        return (
            <div id="step-2">

                <div id="hand">
                    <Cards cards={hand} showBack={false} owner={0} clickAction={selectCard}/>
                    <div className="score">{score.blue}</div>
                </div>

                <Board board={board}
                    validPieces={turn.validPieces}
                    canSelectPiece={turn.canSelectPiece}
                    selectPiece={selectPiece}
                    applyRules={applyRules}
                    aiTurn={aiTurn}
                    caclculateScore={calculateScore}
                />

                <div id="opponent-hand">
                    <Cards cards={opponentHand} showBack={showFront} owner={1}  />
                    <div className="score">{score.red}</div>
                </div>
            </div>
        );
    }
}