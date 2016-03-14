import expect from 'expect';
import { GET_GAME_SUCCESS } from './../../../../constants/actionTypes';
import getGameSuccess from './getGameSuccess';

describe('When retrieving a game is successful', () => {

    let game;
    beforeEach(() => {
        game = { id: 20 };
    });

    it('should return an action with type X', () => {
        const expectedAction = {
            type: GET_GAME_SUCCESS,
            payload: {
                game: game
            }
        };
        expect(getGameSuccess(game)).toEqual(expectedAction);
    });
});