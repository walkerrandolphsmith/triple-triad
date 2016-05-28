import expect from 'expect';
import { Map } from 'immutable';
import { currentGameSet } from './currentGameSet';

describe('src/shared/reducers/game/mutations/currentGameSet', () => {
    describe('Given game state and a payload containing the id of a game', () => {
        let state;
        let payload;
        beforeEach(() => {
            state = new Map({
                gameRoute: -1
            });
            payload = {
                id: 20
            };
        });

        describe('When the current game is set', () => {
            let actual;
            beforeEach(() => {
                actual = currentGameSet(state, payload);
            });

            it('should set game route to the game id in the payload', () => {
                expect(actual.get('gameRoute')).toEqual(payload.id);
            });
        });
    });
});