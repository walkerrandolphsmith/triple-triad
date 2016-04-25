import expect from 'expect';
import { START_AI_TURN } from './../../../../constants/actionTypes';
import { startAiTurn } from './startAiTurn';

describe('src/shared/actions/action-creators/ai/startAiTurn', () => {
    describe('Given START_AI_TURN action type', () => {
        describe('When invoking the startAiTurn action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: START_AI_TURN
                };
                expect(startAiTurn()).toEqual(expectedAction);
            });
        });
    });
});