import { GET_GAMES_SUCCESS } from './../../../../constants/actionTypes';

export function getGamesSuccess(games) {
    return {
        type: GET_GAMES_SUCCESS,
        payload: {
            games: games
        }
    }
}
