import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { boardSelector, handSelector, opponentHandSelector, scoreSelector, winnerSelector, validPiecesSelector, currentGameSelector } from '../ducks/game';
import { selectCard, selectedPieceByClick, endPhase } from '../ducks/game';

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
    return bindActionCreators({ selectCard, selectedPieceByClick, endPhase }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Round);