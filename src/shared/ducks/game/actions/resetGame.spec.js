import expect from 'expect';
import { RESET_GAME, resetGame } from './../index';

describe('src/shared/reducers/game/actions/resetGame', () => {
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