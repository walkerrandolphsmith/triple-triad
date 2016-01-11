import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { boardSelector, handSelector, opponentHandSelector, scoreSelector, validPiecesSelector, cardSelectedSelector } from './../selectors/index';
import * as Actions from './../actions/';
import { toJS } from 'immutable';

import React from 'react';
import Board from './../components/board';
import Hand from './../components/hand';
import PlayerHand from './../components/playerHand';

class Round extends React.Component {

    render() {
        let { game, board, hand, opponentHand, settings, score, validPieces } = this.props;
        let { selectCard, selectedPieceByClick } = this.props;

        return (
            <div id="round" className="container">
                <div className="row">
                    <div className="col-md-2">
                        <PlayerHand score={score.blue} cards={hand} selectedCard={game.selectedCard} clickAction={selectCard} />
                    </div>

                    <div className="col-md-8">
                        <Board board={board} validPieces={validPieces} selectedPiece={game.selectedPiece} selectedPieceByClick={selectedPieceByClick} />
                    </div>

                    <div className="col-md-2">
                        <Hand score={score.red} cards={opponentHand} showBack={settings.visibleHand} owner={2} />
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
        validPieces: validPiecesSelector(game)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Round);