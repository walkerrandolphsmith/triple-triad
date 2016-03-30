import expect from 'expect';
import { RESET_GAME } from './../../../constants/actionTypes';
import { resetGame } from './resetGame';

describe('RESET_GAME', () => {
    it('should create an action to trigger a rest of the board', () => {
        const expectedAction = {
            type: RESET_GAME
        };
        expect(resetGame()).toEqual(expectedAction);
    });
});