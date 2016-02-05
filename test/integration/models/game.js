import expect from 'expect';
import Game from './../../../src/server/models/game';

describe('Game model', () => {

    describe('Give an owner and deck, when creating a new game', () => {

        let ownerId, deck;
        beforeEach(() => {
            ownerId = '1';
            deck = [{id: 0}, {id: 1}];
        });

        it('should create a game with the owner and current player set to the given owner and the deck set to the deck and a game phase of settings selection', () => {
            Game.new(ownerId, deck, (err, game) => {
                expect.toNotExist(err);
                expect(game.owner).toEqual(ownerId);
                expect(game.currentPlayer).toEqual(ownerId);
                expect(game.deck).toEqual(deck);
                expect(game.phase).toEqual('settings-selection');
            });
        });
    });
});