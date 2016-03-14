import { GET_GAME_SUCCESS } from './../../../../constants/actionTypes';

export function getGameSuccess(game){
    return {
        type: GET_GAME_SUCCESS,
        payload: {
            game: game
        }
    }
}