import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Round } from './../components';
import { boardSelector, handSelector, opponentHandSelector, scoreSelector, validPiecesSelector, currentGameSelector } from '../ducks/game';
import { selectCard, completeTurn } from '../ducks/game';
import { isCurrentPlayerMe } from './../utils/isCurrentPlayerMe';

function mapStateToProps(state) {
    const { settings } = state;
    const game = currentGameSelector(state);
    let message = game.get('currentPlayerMessage');
    let isMyTurn = isCurrentPlayerMe(game.get('currentPlayer'), state.auth.get('user').get('id'));
    return {
        game: currentGameSelector(state),
        isMyTurn: isMyTurn,
        settings: settings,
        board: boardSelector(state),
        hand: handSelector(state),
        currentPlayerMessage: message,
        opponentHand: opponentHandSelector(state),
        validPieces: validPiecesSelector(state),
        score: scoreSelector(state)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectCard, completeTurn }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Round);