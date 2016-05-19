import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Games } from './../components';
import { push } from 'react-router-redux';
import { createGame, deleteGame } from './../ducks/game';
import { getScoreForOwner } from './../utils/getScoreForOwner';

function mapStateToProps(state) {
    const loggedInUser = state.auth.get('user').get('id');
    const games = state.game.get('games').map(game => {
        let owner;
        let canDelete;
        if(game.get('owner') === loggedInUser) {
            owner = state.auth.get('user').get('username');
            canDelete = true;
        } else {
            owner = 'AI';
            canDelete = false;
        }
        const blue = getScoreForOwner(game.get('deck'), 1);
        const red = getScoreForOwner(game.get('deck'), 2);
        return {
            id: game.get('id'),
            owner: owner,
            canDelete: canDelete,
            opponent: game.get('opponent'),
            currentPlayer: game.get('currentPlayer'),
            blue: blue,
            red: red,
            phase: game.get('phase')
        }
    });
    return {
        id: loggedInUser,
        games: games
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createGame, deleteGame, push }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
