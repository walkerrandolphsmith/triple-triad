import { Map, fromJS } from 'immutable';

export const getGameSucceeded = (state, payload) => {
    const id = payload.game.id;
    const nextState = state.set('gameRoute', id);

    const isKnownGame = state.get('games').find(game => game.get('id') === id);
    let newGames;
    const newGame = new Map({
        'id': id,
        'owner': payload.game.owner,
        'deck': fromJS(payload.game.deck),
        'phase': payload.game.phase,
        'accepted': payload.game.accepted,
        'currentPlayer': payload.game.currentPlayer,
        'selectedCard': payload.game.selectedCard,
        'selectedPiece': payload.game.selectedPiece
    });

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