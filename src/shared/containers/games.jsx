import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Games } from './../components';
import { push } from 'react-router-redux';
import { createGame, deleteGame, setCurrentGame } from './../ducks/game';
import { getScoreForOwner } from './../utils/getScoreForOwner';
import { isCurrentPlayerMe } from './../utils/isCurrentPlayerMe';
import { showClosed } from './../ducks/filters';
import PHASE from '../constants/phases';

function mapStateToProps(state) {
    const loggedInUser = state.auth.get('user').id;
    const closedGamesShown = state.filters.get('showClosed');
    const games = state.game.get('games')
        .filter(game => game.owner === loggedInUser || game.opponent === loggedInUser)
        .filter(game => closedGamesShown || game.phase !== PHASE.GAME_OVER)
        .map(game => {
            let owner;
            let opponent;
            let avatar = state.auth.get('user').avatar;
            let canDelete;
            if(game.owner === loggedInUser) {
                owner = state.auth.get('user').username;
                opponent = game.opponent;
                canDelete = true;
            } else {
                owner = 'AI';
                opponent = state.auth.get('user').username;
                canDelete = false;
            }
            const blue = getScoreForOwner(game.deck, game.owner);
            const red = getScoreForOwner(game.deck, game.opponent);
            const isMyTurn = isCurrentPlayerMe(game.currentPlayer, loggedInUser);
            return Object.assign({}, game.toJS(), {
                isMyTurn: isMyTurn,
                canDelete: canDelete,
                owner: owner,
                ownerAvatar: avatar,
                opponent: opponent,
                opponentAvatar: avatar,
                blue: blue,
                red: red
            });
        });
    
    return {
        id: loggedInUser,
        games: games,
        closedGameShown: closedGamesShown
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ showClosed, createGame, deleteGame, setCurrentGame, push }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
