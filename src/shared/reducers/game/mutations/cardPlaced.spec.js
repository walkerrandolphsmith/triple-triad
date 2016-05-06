import expect from 'expect';
import { Map, List } from 'immutable';
import { cardPlaced } from './cardPlaced';

describe('src/shared/reducers/game/mutations/cardPlaced', () => {
    describe('Given game state and a payload containing the id and owner of a card', () => {
        let state;
        let selectedPiece;
        beforeEach(() => {
            let selectedCard = 5;
            selectedPiece = 2;
            let deck = new List([
                new Map({
                    id: 20, owner: 2, boardIndex: -1
                })
            ]);
            let gameId = 20;
            let game = new Map({
                id: gameId,
                deck: deck,
                selectedCard: selectedCard,
                selectedPiece: selectedPiece
            });
            state = new Map({
                gameRoute: gameId,
                games: new List([game])
            });
        });

        describe('When placing a card', () => {
            let actual;
            beforeEach(() => {
                actual = cardPlaced(state);
            });

            it('should get the card in the deck with an index equal to the selected card and set its boardIndex to the selectedPiece', () => {
                console.log(actual.toJS().games[0].deck);
                console.log('actual');
                expect(actual.get('games').first().get('deck').first().get('boardIndex')).toEqual(selectedPiece);
            });
        });
    });
});