import expect from 'expect';
import { List, Map } from 'immutable';
import { gameDeletionSucceeded } from './gameDeletionSucceeded';

describe('src/shared/reducers/game/mutations/gameDeletionSucceeded', () => {
    describe('Given game state and payload containing game id', () => {
        let state;
        let payload;
        beforeEach(() => {
            payload = {
                gameId: 1
            };
            state = new Map({
                games: new List([
                    new Map({ id: 1 }),
                    new Map({ id:2 })
                ])
            });
        });

        describe('When game is deleted', () => {
            let actual;
            beforeEach(() => {
               actual = gameDeletionSucceeded(state, payload);
            });

            it('should remove the game with given game id from the list', () => {
               expect(actual.get('games').first().toJS()).toEqual({ id: 2});
            });
        });
    });
});