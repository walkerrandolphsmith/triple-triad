import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Games } from './../components';
import { push } from 'react-router-redux';
import { createGame, deleteGame, setCurrentGame } from './../ducks/game';
import { getScoreForOwner } from './../utils/getScoreForOwner';
import { isCurrentPlayerMe } from './../utils/isCurrentPlayerMe';

function mapStateToProps(state) {
    const loggedInUser = state.auth.get('user').id;
    const games = state.game.get('games').map(game => {
        let owner;
        let opponent;
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
        const blue = getScoreForOwner(game.deck, 1);
        const red = getScoreForOwner(game.deck, 2);
        let isMyTurn = isCurrentPlayerMe(game.currentPlayer, loggedInUser);
        return {
            isMyTurn: isMyTurn,
            id: game.id,
            owner: owner,
            canDelete: canDelete,
            opponent: opponent,
            currentPlayer: game.currentPlayer,
            blue: blue,
            red: red,
            phase: game.phase
        }
    });
    return {
        id: loggedInUser,
        games: games
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createGame, deleteGame, setCurrentGame, push }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
