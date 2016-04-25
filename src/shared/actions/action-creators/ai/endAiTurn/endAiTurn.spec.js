import expect from 'expect';
import { END_AI_TURN } from './../../../../constants/actionTypes';
import { endAiTurn } from './endAiTurn';

describe('src/shared/actions/action-creators/ai/endAiTurn', () => {
    it('should create an action to end the AI oppoents turn', () => {
        const expectedAction = {
            type: END_AI_TURN
        };
        expect(endAiTurn()).toEqual(expectedAction);
    });
});