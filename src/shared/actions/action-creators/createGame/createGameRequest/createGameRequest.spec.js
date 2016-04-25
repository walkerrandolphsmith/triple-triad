import expect from 'expect';
import { CREATE_GAME_REQUEST } from './../../../../constants/actionTypes';
import { createGameRequest } from './createGameRequest';

describe('src/shared/actions/action-creators/createGame/createGameRequest', () => {
    describe('Given CREATE_GAME_REQUEST action type', () => {
        describe('When invoking the createGameRequest action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: CREATE_GAME_REQUEST
                };
                expect(createGameRequest()).toEqual(expectedAction);
            });
        });
    });
});