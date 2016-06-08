import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Games } from './../components';
import { push } from 'react-router-redux';
import { createGame, deleteGame, setCurrentGame } from './../ducks/game';
import { showClosed, filterWinnerType, filterPhase } from './../ducks/filters';
import { getScoreForOwner } from './../utils/getScoreForOwner';
import { isCurrentPlayerMe } from './../utils/isCurrentPlayerMe';
import PHASE from '../constants/phases';

function mapStateToProps(state) {
    const loggedInUser = state.auth.get('user').id;
    const closedGamesShown = state.filters.get('showClosed');
    const winnerType = state.filters.get('winnerType');
    const phaseFilterValue = state.filters.get('phase');

    let winnerFilter = game => game;
    const winnerFilterMap = {
        'all': winnerFilter,
        'winner': game => game.winner === 'winner',
        'loser': game => game.winner === 'loser'
    };
    if(winnerFilterMap[winnerType]) {
        winnerFilter = winnerFilterMap[winnerType]
    }

    let phaseFilter = game => game;
    const phaseFilterMap = {
        'all': phaseFilter
    };
    for(const phase in PHASE) {
        phaseFilterMap[phase] = game => game.phase === phase
    }
    if(phaseFilterMap[phaseFilterValue]) {
        phaseFilter = phaseFilterMap[phaseFilterValue];
    }
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
            let winner;
            if(blue === red) {
                winner = 'tie';
            } else {
                winner = blue > red ? 'winner' : 'loser';
            }
            const isMyTurn = isCurrentPlayerMe(game.currentPlayer, loggedInUser);
            return Object.assign({}, game.toJS(), {
                isMyTurn: isMyTurn,
                canDelete: canDelete,
                owner: owner,
                ownerAvatar: avatar,
                opponent: opponent,
                opponentAvatar: avatar,
                blue: blue,
                red: red,
                winner: winner
            });
        })
        .filter(winnerFilter)
        .filter(phaseFilter);
    
    return {
        id: loggedInUser,
        games: games,
        phases: PHASE,
        closedGameShown: closedGamesShown,
        winnerType: winnerType,
        phaseFilterValue: phaseFilterValue
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        showClosed,
        filterWinnerType,
        filterPhase,
        createGame,
        deleteGame,
        setCurrentGame,
        push 
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
