import expect from 'expect';
import { START_AI_TURN } from './../../../../constants/actionTypes';
import { startAiTurn } from './startAiTurn';

describe('START_AI_TURN', () => {

    it('should create an action to initiate the AI oppoents turn', () => {
        const expectedAction = {
            type: START_AI_TURN
        };
        expect(startAiTurn()).toEqual(expectedAction);
    });

});