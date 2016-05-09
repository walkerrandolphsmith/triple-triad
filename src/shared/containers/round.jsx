import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Round } from './../components';
import { boardSelector, handSelector, opponentHandSelector, scoreSelector, validPiecesSelector, currentGameSelector } from '../ducks/game';
import { selectCard, completeTurn } from '../ducks/game';

function mapStateToProps(state) {
    const { settings } = state;

    return {
        game: currentGameSelector(state),
        settings: settings,
        board: boardSelector(state),
        hand: handSelector(state),
        opponentHand: opponentHandSelector(state),
        validPieces: validPiecesSelector(state),
        score: scoreSelector(state)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectCard, completeTurn }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Round);