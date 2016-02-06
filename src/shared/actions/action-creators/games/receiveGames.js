import { RECEIVE_GAMES } from './../../../constants/actionTypes';

export function receiveGames(games) {
    return {
        type: RECEIVE_GAMES,
        payload: {
            games: games
        }
    }
}
