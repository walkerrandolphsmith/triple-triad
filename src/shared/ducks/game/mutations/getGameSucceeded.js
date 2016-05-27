import { convertGame } from './../../../utils/convertGameToImmutable';

export const getGameSucceeded = (state, payload) => {
    const id = payload.game.id;
    const nextState = state.set('gameRoute', id);

    const isKnownGame = state.get('games').find(game => game.id === id);
    let newGames;

    const newGame = convertGame(payload.game);

    if(isKnownGame) {
        newGames = state.get('games').update(
            state.get('games').findIndex(
                game => game.id === id
            ),
            game => newGame
        );
    }else {
        newGames = state.get('games').push(newGame)
    }

    return nextState.set('games', newGames);
};