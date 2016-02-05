import mongoose from 'mongoose';

let Game;

let GameSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.ObjectId },
    opponent: { type: mongoose.Schema.ObjectId },
    currentPlayer: { type: mongoose.Schema.ObjectId },
    deck: Array,
    phase: String
});

GameSchema.statics.new = function (ownerId, deck, fn) {

    let game = new Game();

    game.owner = ownerId;
    game.currentPlayer = ownerId;
    game.deck = deck;
    game.phase = 'settings-selection';

    game.save();
};

Game = mongoose.model('Game', GameSchema);

export default Game;
