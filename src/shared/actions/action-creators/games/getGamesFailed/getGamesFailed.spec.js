import expect from 'expect';
import { GET_GAMES_FAILED } from './../../../../constants/actionTypes';
import { getGamesFailed } from './getGamesFailed';

describe('src/shared/actions/action-creators/games/getGamesFailed', () => {
    describe('Given GET_GAMES_FAILED action type', () => {
        describe('When invoking the getGamesFailed action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: GET_GAMES_FAILED
                };
                expect(getGamesFailed()).toEqual(expectedAction);
            });
        });
    });
});