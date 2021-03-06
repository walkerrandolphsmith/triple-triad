import expect from 'expect';
import { GET_GAME_SUCCESS, getGameSuccess } from './../index';

describe('src/shared/reducers/game/actions/getGameSuccess', () => {
    describe('Given FORGOT_PASSWORD_FORM_ERROR action type', () => {
        let game;
        let expectedAction;
        beforeEach(() => {
            game = { id: 20};
            expectedAction = {
                type: GET_GAME_SUCCESS,
                payload: {
                    game: game
                }
            };
        });

        describe('When invoking the getGameSuccess action creator', () => {
            it('should create an action', () => {
                expect(getGameSuccess(game)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload game field', () => {
                expect(getGameSuccess(game).payload.game).toEqual(game);
            });
        });
    });
});