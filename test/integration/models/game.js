import expect from 'expect';
import mongoose from 'mongoose';
import Game from './../../../src/server/models/game';

describe('Game model', () => {

    let db;
    before(done => {
        db = mongoose.connect('mongodb://localhost/test');
        done();
    });

    after(done => {
        mongoose.connection.close();
        done();
    });

    describe('When saving a new game with owner, current player, opponent, deck, and phase', () => {

        let newGame, owner, currentPlayer, opponent, deck, phase;
        beforeEach(done => {
            owner = 1;
            currentPlayer = 1;
            opponent = 2;
            deck = [{id: 0}, {id: 1}];
            phase = 'phase';

            newGame = new Game({
                owner: owner,
                currentPlayer: currentPlayer,
                opponent: opponent,
                deck: deck,
                phase: phase
            });

            newGame.save(error => { done(); })
        });

        it('should have an owner, current player, opponent, deck, and phase property', done => {
            Game.findOne({owner: owner}, (err, game) => {
               expect(game.owner).toEqual(owner);
               expect(game.currentPlayer).toEqual(currentPlayer);
               expect(game.opponent).toEqual(opponent);
               expect(game.deck).toEqual(deck);
               expect(game.phase).toEqual(phase);
               done();
            });
        });
    });

    afterEach(done => {
        Game.remove({}, () => { done(); });
    });
});