import expect from 'expect';
import { REQUEST_NEW_GAME } from './../../../../constants/actionTypes';
import { createGameRequest } from './createGameRequest';

describe('REQUEST_NEW_GAME', () => {

    it('should create an action to initiate creating a game', () => {
        const expectedAction = {
            type: REQUEST_NEW_GAME
        };
        expect(createGameRequest()).toEqual(expectedAction);
    });

});