import expect from 'expect';
import { CREATE_GAME_FAILED } from './../../../../constants/actionTypes';
import { createGameFailed } from './createGameFailed';

describe('CREATE_FAILED', () => {
    it('should create an action to indicate creating a game failed', () => {
        const expectedAction = {
            type: CREATE_GAME_FAILED
        };
        expect(createGameFailed()).toEqual(expectedAction);
    });
});