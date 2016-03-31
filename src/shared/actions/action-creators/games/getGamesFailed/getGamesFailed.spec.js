import expect from 'expect';
import { GET_GAMES_FAILED } from './../../../../constants/actionTypes';
import { getGamesFailed } from './getGamesFailed';

describe('CGET_GAMES_FAILED action creator', () => {
    it('should create an action indicate fetching games failed', () => {
        const expectedAction = {
            type: GET_GAMES_FAILED
        };
        expect(getGamesFailed()).toEqual(expectedAction);
    });
});