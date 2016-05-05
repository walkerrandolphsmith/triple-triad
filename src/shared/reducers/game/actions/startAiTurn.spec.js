import expect from 'expect';
import { START_AI_TURN, startAiTurn } from './../index';

describe('src/shared/reducers/game/actions/startAiTurn', () => {
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