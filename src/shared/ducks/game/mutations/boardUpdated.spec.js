import expect from 'expect';
import { Map, List } from 'immutable';
import { boardUpdated } from './boardUpdated';
import { GameRecord, CardRecord } from './../../../ducks/game/records';

describe('src/shared/reducers/game/mutations/boardUpdated', () => {
    describe('Given game state and a payload containing the index and owner of a card', () => {
        let state;
        let payload;
        beforeEach(() => {
            let index = 20;
            let deck = new List([
                new CardRecord({
                    id: 20, owner: 2, boardIndex: index
                })
            ]);
            let gameId = 20;
            let game = new GameRecord({
                id: gameId,
                deck: deck,
                selectedCard: -1,
                selectedPiece: -1
            });
            state = new Map({
                gameRoute: gameId,
                games: new List([game])
            });
            payload = {
                index: index,
                owner: 1,
                flipDirection: 2
            };
        });

        describe('When updating the board', () => {
            let actual;
            beforeEach(() => {
                actual = boardUpdated(state, payload);
            });

            it('should set the owner of the card whose boardIndex is equal to the payload index', () => {
                expect(actual.get('games').first().deck.first().owner).toEqual(payload.owner);
            });

            it('should set the flipDirection of the card whose boardIndex is equal to the payload index', () => {
                expect(actual.get('games').first().deck.first().flipDirection).toEqual(payload.flipDirection);
            });
        });
    });
});