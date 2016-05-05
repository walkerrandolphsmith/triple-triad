import expect from 'expect';
import { END_AI_TURN, endAiTurn } from './../index';

describe('src/shared/reducers/game/actions/endAiTurn', () => {
    describe('Given END_AI_TURN action type', () => {
        describe('When invoking the endAiTurn action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: END_AI_TURN
                };
                expect(endAiTurn()).toEqual(expectedAction);
            });
        });
    });
});