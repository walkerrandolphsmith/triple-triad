import expect from 'expect';
import { CREATE_GAME_REQUEST } from './../../../../constants/actionTypes';
import { createGameRequest } from './createGameRequest';

describe('REQUEST_NEW_GAME', () => {
    it('should create an action to initiate creating a game', () => {
        const expectedAction = {
            type: CREATE_GAME_REQUEST
        };
        expect(createGameRequest()).toEqual(expectedAction);
    });
});