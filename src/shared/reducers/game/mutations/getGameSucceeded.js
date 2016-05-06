import { Map } from 'immutable';

export const getGameSucceeded = (state, payload) => {
    let id = payload.game._id;
    let nextState = state.set('gameRoute', id);

    let isKnownGame = state.get('games').find(game => game.get('id') === id);

    let newGame = new Map({
        'id': id,
        'owner': payload.game.owner,
        'deck': fromJS(payload.game.deck),
        'phase': payload.game.phase,
        'accepted': payload.game.accepted,
        'currentPlayer': payload.game.currentPlayer,
        'selectedCard': payload.game.selectedCard,
        'selectedPiece': payload.game.selectedPiece
    });

    let newGames;

    if(isKnownGame) {
        newGames = state.get('games').update(
            state.get('games').findIndex(
                game => game.get('id') === id
            ),
            game => newGame
        );
    }else {
        newGames = state.get('games').push(newGame)
    }

    return nextState.set('games', newGames);
};