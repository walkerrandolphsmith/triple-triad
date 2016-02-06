import expect from 'expect';
import { GET_GAMES_FAILED } from './../../../../../src/shared/constants/actionTypes';
import { getGamesFailed } from './../../../../../src/shared/actions/action-creators/';

describe('CGET_GAMES_FAILED action creator', () => {

    it('should create an action indicate fetching games failed', () => {
        const expectedAction = {
            type: GET_GAMES_FAILED
        };
        expect(getGamesFailed()).toEqual(expectedAction)
    });

});