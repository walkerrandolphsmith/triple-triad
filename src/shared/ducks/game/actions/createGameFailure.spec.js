import expect from 'expect';
import { CREATE_GAME_FAILED, createGameFailure } from './../index';

describe('src/shared/reducers/game/actions/createGameFailure', () => {
    describe('Given CREATE_GAME_FAILED action type', () => {
        describe('When invoking the createGameFailed action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: CREATE_GAME_FAILED
                };
                expect(createGameFailure()).toEqual(expectedAction);
            });
        });
    });
});