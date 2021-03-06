import expect from 'expect';
import { GET_GAME_FAILED, getGameFailure } from './../index';

describe('src/shared/reducers/game/actions/getGameFailure', () => {
    describe('Given GET_GAME_FAILED action type', () => {
        describe('When invoking the getGameFailed action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: GET_GAME_FAILED
                };
                expect(getGameFailure()).toEqual(expectedAction);
            });
        });
    });
});