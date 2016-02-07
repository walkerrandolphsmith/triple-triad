import expect from 'expect';
import { RECEIVE_NEW_GAME } from './../../../../../src/shared/constants/actionTypes';
import { receiveNewGame } from './../../../../../src/shared/actions/action-creators';

describe('RECEIVE_NEW_GAME', () => {

    it('should create an action to indicate creating a game was successful', () => {
        const expectedAction = {
            type: RECEIVE_NEW_GAME,
            payload: {
                game: 1
            }
        };
        expect(receiveNewGame(1)).toEqual(expectedAction);
    });

});