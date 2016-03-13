import expect from 'expect';
import { GET_GAME_SUCCESS } from './../../../../constants/actionTypes';
import getGameSuccess from './getGame';

describe('When retrieving a game is successful', () => {


    it('should return an action with type X', () => {
        const expectedAction = {
            type: GET_GAME_SUCCESS,
            payload: {

            }
        };
        expect(getGameSuccess()).toEqual(expectedAction);
    });
});