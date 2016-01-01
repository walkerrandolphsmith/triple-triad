import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { boardSelector, handSelector, opponentHandSelector, scoreSelector, validPiecesSelector, stepCompleteSelector } from './../selectors/index';
import * as Actions from './../action-creators/';
import { toJS } from 'immutable';

import React from 'react';
import Board from './../components/board';
import Hand from './../components/hand';

class Round extends React.Component {
    render() {
        let {game, board, hand, opponentHand, settings, score, validPieces, selectCard, playerTakesTurn} = this.props;
        let {selectedCard, ownerType} = game;
        let showFront = settings.visibleHand;

        return (
            <div id="round" className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Hand score={score.blue} hand={hand} showBack={false} owner={ownerType.player} clickAction={selectCard} />
                    </div>

                    <div className="col-md-8">
                        <Board board={board} validPieces={validPieces} cardHasBeenSelected={selectedCard !== -1} playerTakesTurn={playerTakesTurn} />
                    </div>

                    <div className="col-md-2">
                        <Hand score={score.red} hand={opponentHand} showBack={showFront} owner={ownerType.opponent} />
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const game = state.game.toJS();
    const settings = state.settings.toJS();
    return {
        game: game,
        settings: settings,
        board: boardSelector(game),
        hand: handSelector(game),
        opponentHand: opponentHandSelector(game),
        score: scoreSelector(game),
        handSelected: stepCompleteSelector(game),
        validPieces: validPiecesSelector(game)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Round);