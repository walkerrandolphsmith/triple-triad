import React from 'react';
import Board from './../board';
import Cards from './../cards';
import GameOverBanner from './../gameOverBanner';

export default class Round extends React.Component {
    render() {
        let {game, hand, opponentHand, settings,score, validPieces, winner, selectCard, playerTakesTurn} = this.props;
        let {selectedCard, board, ownerType} = game;
        let showFront = settings.visibleHand;

        return (
            <div id="step-2">

                <GameOverBanner winner={winner} score={score} />

                <div id="hand">
                    <Cards cards={hand} showBack={false} owner={ownerType.player} clickAction={selectCard}/>
                    <div className="score">{score.blue}</div>
                </div>

                <Board board={board}
                    validPieces={validPieces}
                    cardHasBeenSelected={selectedCard !== -1}
                    playerTakesTurn={playerTakesTurn}
                />

                <div id="opponent-hand">
                    <Cards cards={opponentHand} showBack={showFront} owner={ownerType.opponent}  />
                    <div className="score">{score.red}</div>
                </div>
            </div>
        );
    }
}