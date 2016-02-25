import expect from 'expect';
import { CREATE_GAME_SUCCESS } from './../../../../constants/actionTypes';
import { createGameSuccess } from './createGameSuccess';

describe('RECEIVE_NEW_GAME', () => {

    it('should create an action to indicate creating a game was successful', () => {
        const expectedAction = {
            type: CREATE_GAME_SUCCESS,
            payload: {
                game: 1
            }
        };
        expect(createGameSuccess(1)).toEqual(expectedAction);
    });

});