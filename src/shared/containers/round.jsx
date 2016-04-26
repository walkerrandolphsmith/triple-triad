import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { boardSelector, handSelector, opponentHandSelector, scoreSelector, winnerSelector, validPiecesSelector } from './../selectors/index';
import { currentGameSelector } from './../selectors/currentGame/currentGameSelector';
import * as Actions from './../actions/';
import WINNER_TYPE from './../constants/winner';

import React from 'react';
import { Round } from './../components';

function mapStateToProps(state) {
    const { settings } = state;

    return {
        game: currentGameSelector(state),
        settings: settings,
        board: boardSelector(state),
        hand: handSelector(state),
        opponentHand: opponentHandSelector(state),
        validPieces: validPiecesSelector(state),
        score: scoreSelector(state),
        winner: winnerSelector(state),
        winnerType: WINNER_TYPE
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Round);