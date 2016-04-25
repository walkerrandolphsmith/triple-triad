import expect from 'expect';
import { Map, List } from 'immutable';
import addCard from './addCard';

describe('src/shared/reducers/game/addCard', () => {
    describe('Given game state and payload containing id and owner of a card', () => {
        let state;
        let payload;
        beforeEach(() => {
            let gameId = 1;
            let cardId = 20;
            let owner = 2;

            let card = new Map({
                id: cardId, owner: owner
            });

            let deck = new List([card]);

            let game = new Map({
                id: gameId,
                deck: deck
            });

            state = new Map({
                games: new List([game]),
                gameRoute: gameId
            });

            payload = {
                id: cardId,
                owner: owner
            };
        });

        describe('When adding a card to player ownership', () => {
            let actual;
            beforeEach(() => {
                actual = addCard(state, payload);
            });

            it('should set a card, in the deck with id equal to payload id, owner to the payload owner ', () => {
                expect(actual.get('games').first().get('deck').first().get('owner')).toEqual(payload.owner);
            });
        });
    });
});