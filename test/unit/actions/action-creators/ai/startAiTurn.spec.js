import expect from 'expect';
import { START_AI_TURN } from './../../../../../src/shared/constants/actionTypes';
import { startAiTurn } from './../../../../../src/shared/actions/action-creators';

describe('START_AI_TURN', () => {

    it('should create an action to initiate the AI oppoents turn', () => {
        const expectedAction = {
            type: START_AI_TURN
        };
        expect(startAiTurn()).toEqual(expectedAction);
    });

});