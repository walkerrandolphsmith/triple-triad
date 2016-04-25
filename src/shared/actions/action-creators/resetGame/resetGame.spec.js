import expect from 'expect';
import { RESET_GAME } from './../../../constants/actionTypes';
import { resetGame } from './resetGame';

describe('src/shared/actions/action-creators/resetGame', () => {
    describe('Given RESET_GAME action type', () => {
        describe('When invoking the resetGame action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: RESET_GAME
                };
                expect(resetGame()).toEqual(expectedAction);
            });
        });
    });
});