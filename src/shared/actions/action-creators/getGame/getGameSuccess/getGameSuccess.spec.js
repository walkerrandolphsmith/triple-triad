import expect from 'expect';
import { GET_GAME_SUCCESS } from './../../../../constants/actionTypes';
import { getGameSuccess } from './getGameSuccess';

describe('src/shared/actions/action-creators/getGame/getGameSuccess', () => {
    describe('When retrieving a game is successful', () => {
        let game;
        let expectedAction;
        beforeEach(() => {
            game = {id: 20};
            expectedAction = {
                type: GET_GAME_SUCCESS,
                payload: {
                    game: game
                }
            };
        });

        it('should return an action with type X', () => {
            expect(getGameSuccess(game)).toEqual(expectedAction);
        });
    });
});