import expect from 'expect';
import { RESET_GAME } from './../../../../src/shared/constants/actionTypes';
import { resetGame } from './../../../../src/shared/actions/action-creators/';

describe('RESET_GAME', () => {

    it('should create an action to trigger a rest of the board', () => {
        const expectedAction = {
            type: RESET_GAME
        };
        expect(resetGame()).toEqual(expectedAction)
    });

});