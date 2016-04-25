import expect from 'expect';
import { GET_GAME_FAILED } from './../../../../constants/actionTypes';
import { getGameFailed } from './getGameFailed';

describe('src/shared/actions/action-creators/getGame/getGameFailed', () => {
    describe('Given GET_GAME_FAILED action type', () => {
        describe('When invoking the getGameFailed action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: GET_GAME_FAILED
                };
                expect(getGameFailed()).toEqual(expectedAction);
            });
        });
    });
});