import expect from 'expect';
import { DELETE_GAME_FAILURE, deleteGameFailure } from './../index';

describe('src/shared/reducers/game/actions/deleteGameFailure', () => {
    describe('Given DELETE_GAME_FAILURE action type', () => {
        describe('When invoking the deleteGameFailure action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: DELETE_GAME_FAILURE
                };
                expect(deleteGameFailure()).toEqual(expectedAction);
            });
        });
    });
});