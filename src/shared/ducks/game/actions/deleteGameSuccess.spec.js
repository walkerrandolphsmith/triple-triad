import expect from 'expect';
import { DELETE_GAME_SUCCESS, deleteGameSuccess } from './../index';

describe('src/shared/reducers/game/actions/deleteGameSuccess', () => {
    describe('Given DELETE_GAME_SUCCESS action type', () => {
        describe('When invoking the deleteGameSuccess action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: DELETE_GAME_SUCCESS,
                    payload: {
                        gameId: 1
                    }
                };
                expect(deleteGameSuccess(1)).toEqual(expectedAction);
            });
        });
    });
});