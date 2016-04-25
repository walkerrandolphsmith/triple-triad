import expect from 'expect';
import { CREATE_GAME_FAILED } from './../../../../constants/actionTypes';
import { createGameFailed } from './createGameFailed';

describe('src/shared/actions/action-creators/createGame/createGameFailed', () => {
    describe('Given CREATE_GAME_FAILED action type', () => {
        describe('When invoking the createGameFailed action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: CREATE_GAME_FAILED
                };
                expect(createGameFailed()).toEqual(expectedAction);
            });
        });
    });
});