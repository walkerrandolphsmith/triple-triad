import expect from 'expect';
import { REQUEST_NEW_GAME } from './../../../../../src/shared/constants/actionTypes';
import { requestNewGame } from './../../../../../src/shared/actions/action-creators';

describe('REQUEST_NEW_GAME', () => {

    it('should create an action to initiate creating a game', () => {
        const expectedAction = {
            type: REQUEST_NEW_GAME
        };
        expect(requestNewGame()).toEqual(expectedAction);
    });

});