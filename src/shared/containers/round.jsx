import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handSelector, opponentHandSelector, scoreSelector, validPiecesSelector, winnerSelector, stepCompleteSelector } from './../selectors/index';
import * as Actions from './../action-creators/';

import React from 'react';
import Board from './../components/board';
import Cards from './../components/cards';
import GameOverBanner from './../components/gameOverBanner';

class Round extends React.Component {
    render() {
        let {game, hand, opponentHand, settings, score, validPieces, winner, selectCard, newGame, playerTakesTurn} = this.props;
        let {selectedCard, board, ownerType} = game;
        let showFront = settings.visibleHand;

        return (
            <div id="step-2">

                <GameOverBanner winner={winner} score={score} newGame={newGame}/>

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


function mapStateToProps(state) {
    return {
        game: state.game,
        settings: state.settings,
        hand: handSelector(state.game),
        opponentHand: opponentHandSelector(state.game),
        score: scoreSelector(state.game),
        handSelected: stepCompleteSelector(state.game),
        validPieces: validPiecesSelector(state.game),
        winner: winnerSelector(state.game)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Round);