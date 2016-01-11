import expect from 'expect';
import { END_AI_TURN } from './../../../../src/shared/constants/action-types';
import { endAiTurn } from './../../../../src/shared/actions/action-creators/';

describe('END_AI_TURN', () => {

    it('should create an action to end the AI oppoents turn', () => {
        const expectedAction = {
            type: END_AI_TURN
        };
        expect(endAiTurn()).toEqual(expectedAction);
    });

});