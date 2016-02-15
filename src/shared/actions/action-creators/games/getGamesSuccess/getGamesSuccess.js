import { RECEIVE_GAMES } from './../../../../constants/actionTypes';

export function getGamesSuccess(games) {
    return {
        type: RECEIVE_GAMES,
        payload: {
            games: games
        }
    }
}
