import expect from 'expect';
import { CREATE_GAME_SUCCESS } from './../../../../constants/actionTypes';
import { createGameSuccess } from './createGameSuccess';

describe('RECEIVE_NEW_GAME', () => {
    let game;
    it('should create an action to indicate creating a game was successful', () => {
        game = 1;
        const expectedAction = {
            type: CREATE_GAME_SUCCESS,
            payload: {
                game: game
            }
        };
        expect(createGameSuccess(game)).toEqual(expectedAction);
    });
});