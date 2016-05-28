import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Round } from './../components';
import { boardSelector, handSelector, opponentHandSelector, scoreSelector, validPiecesSelector, currentGameSelector } from '../ducks/game';
import { selectCard, completeTurn } from '../ducks/game';
import { isCurrentPlayerMe } from './../utils/isCurrentPlayerMe';

function mapStateToProps(state) {
    const { settings } = state;
    const game = currentGameSelector(state);
    let message = game.currentPlayerMessage;
    let isMyTurn = isCurrentPlayerMe(game.currentPlayer, state.auth.get('user').get('id'));
    return {
        game: game,
        isMyTurn: isMyTurn,
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