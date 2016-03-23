import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { boardSelector, handSelector, opponentHandSelector, scoreSelector, winnerSelector, validPiecesSelector, cardSelectedSelector } from './../selectors/index';
import * as Actions from './../actions/';
import WINNER_TYPE from './../constants/winner';

import React from 'react';
import { Round } from './../components';

function mapStateToProps(state) {
    const { game, settings } = state;

    return {
        game: game,
        settings: settings,
        board: boardSelector(game),
        hand: handSelector(game),
        opponentHand: opponentHandSelector(game),
        validPieces: validPiecesSelector(game),
        score: scoreSelector(game),
        winner: winnerSelector(game),
        winnerType: WINNER_TYPE
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Round);