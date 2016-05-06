import expect from 'expect';
import { GET_GAMES_FAILED, getGamesFailure } from './../index';

describe('src/shared/reducers/game/actions/getGamesFailure', () => {
    describe('Given GET_GAMES_FAILED action type', () => {
        describe('When invoking the getGamesFailed action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: GET_GAMES_FAILED
                };
                expect(getGamesFailure()).toEqual(expectedAction);
            });
        });
    });
});