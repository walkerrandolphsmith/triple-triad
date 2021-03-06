import expect from 'expect';
import { Map, List } from 'immutable';
import { phaseSet } from './phaseSet';
import { GameRecord } from './../../../ducks/game/records';

describe('src/shared/reducers/game/phaseSet', () => {
    describe('Given game state and a payload containing the phase of the game', () => {
        let state;
        let payload;
        beforeEach(() => {
            let gameId = 20;
            let game = new GameRecord({
                id: gameId,
                phase: "phase1"
            });
            state = new Map({
                gameRoute: gameId,
                games: new List([game])
            });
            payload = {
                phase: 'phase2'
            };
        });

        describe('When setting the game phase', () => {
            let actual;
            beforeEach(() => {
                actual = phaseSet(state, payload);
            });

            it('should set the phase to the phase in the payload', () => {
                expect(actual.get('games').first().phase).toEqual(payload.phase);
            });
        });
    });
});