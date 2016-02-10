import expect from 'expect';
import { REQUEST_NEW_GAME } from './../../../../constants/actionTypes';
import { requestNewGame } from './requestNewGame';

describe('REQUEST_NEW_GAME', () => {

    it('should create an action to initiate creating a game', () => {
        const expectedAction = {
            type: REQUEST_NEW_GAME
        };
        expect(requestNewGame()).toEqual(expectedAction);
    });

});