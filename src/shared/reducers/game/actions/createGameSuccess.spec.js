import expect from 'expect';
import { CREATE_GAME_SUCCESS, createGameSuccess } from './../index';

describe('src/shared/reducers/game/actions/createGameSuccess', () => {
    describe('Given CREATE_GAME_SUCCESS action type', () => {
        let game;
        let expectedAction;
        beforeEach(() => {
            game = 1;
            expectedAction = {
                type: CREATE_GAME_SUCCESS,
                payload: {
                    game: game
                }
            };
        });
        
        describe('When invoking the createGameSuccess action creator', () => {
            it('should create an action', () => {
                expect(createGameSuccess(game)).toEqual(expectedAction);
            });

            it('should set its first parameter the to the payload game field', () => {
                expect(createGameSuccess(game).payload.game).toEqual(game);
            });
        });
    });
});