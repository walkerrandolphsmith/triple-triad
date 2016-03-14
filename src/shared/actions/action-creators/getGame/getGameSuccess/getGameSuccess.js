import { GET_GAME_SUCCESS } from './../../../../constants/actionTypes';

export default function(game){
    return {
        type: GET_GAME_SUCCESS,
        payload: {
            game: game
        }
    }
}