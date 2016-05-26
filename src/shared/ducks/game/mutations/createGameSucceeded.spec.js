import expect from 'expect';
import { Map, List } from 'immutable';
import { createGameSucceeded } from './createGameSucceeded';

describe('src/shared/reducers/game/mutations/createGameSucceeded', () => {
    describe('Given games state and a payload containing a game', () => {
        let state;
        let payload;
        beforeEach(() => {
            state = new Map({
                newGame: new Map({
                    loading: false,
                    loaded: false,
                    failed: false
                }),
                games: new List([])
            });
            payload = {
                game: {
                    id: 1,
                    owner: 0,
                    opponent: 0,
                    phase: 'p',
                    accepted: false,
                    currentPlayer: 0,
                    selectedCard: 0,
                    selectedPiece: 0,
                    deck: [{ rank: { bottom: 0, left: 0, right: 0, top: 0 } }]
                }
            };
        });

        describe('When creating a new game is successful', () => {
            let actual;
            beforeEach(() => {
                actual = createGameSucceeded(state, payload);
            });

            it('should set the newGame loading state to false', () => {
                expect(actual.get('newGame').get('loading')).toEqual(false);
            });

            it('should set the newGame loaded state to true', () => {
                expect(actual.get('newGame').get('loaded')).toEqual(true);
            });

            it('should set the newGame failed state to false', () => {
                expect(actual.get('newGame').get('failed')).toEqual(false);
            });

            it('should add the game in payload to the games list', () => {
                expect(actual.get('games').first().toJS()).toEqual(payload.game);
            });
        });
    });
});