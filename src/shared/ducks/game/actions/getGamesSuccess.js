import { GET_GAMES_SUCCESS } from './../index';
export const getGamesSuccess = games => ({
    type: GET_GAMES_SUCCESS,
    payload: {
        games: games
    }
});