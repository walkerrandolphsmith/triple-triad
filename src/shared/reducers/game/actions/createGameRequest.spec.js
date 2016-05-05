import expect from 'expect';
import { CREATE_GAME_REQUEST, createGameRequest } from './../index';

describe('src/shared/reducers/game/actions/createGameRequest', () => {
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