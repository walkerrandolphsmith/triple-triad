import { Map, List } from 'immutable';

export default (state, payload) => {
    let nextState = state.setIn('getGames.failed'.split('.'), false);
    nextState = nextState.setIn('getGames.loading'.split('.'), false);
    nextState = nextState.setIn('getGames.loaded'.split('.'), true);

    let games = payload.games.map(game => new Map({
            id: game._id,
            owner: game.owner,
            deck: new List(game.deck),
            phase: game.phase,
            accepted: game.accepted,
            currentPlayer: game.currentPlayer,
            selectedCard: game.selectedCard,
            selectedPiece: game.selectedPiece
        })
    );

    return nextState.set('games', new List(games));
};