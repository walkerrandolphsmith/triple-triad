import expect from 'expect';
import { DELETE_GAME_REQUEST, deleteGameRequest } from './../index';

describe('src/shared/reducers/game/actions/deleteGameRequest', () => {
    describe('Given DELETE_GAME_FAILURE action type', () => {
        describe('When invoking the deleteGameRequest action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: DELETE_GAME_REQUEST
                };
                expect(deleteGameRequest()).toEqual(expectedAction);
            });
        });
    });
});