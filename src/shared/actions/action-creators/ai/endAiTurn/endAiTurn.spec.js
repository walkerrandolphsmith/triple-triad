import expect from 'expect';
import { END_AI_TURN } from './../../../../constants/actionTypes';
import { endAiTurn } from './endAiTurn';

describe('src/shared/actions/action-creators/ai/endAiTurn', () => {
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