import mongoose from 'mongoose';

let GameSchema = new mongoose.Schema({
    owner: String,
    opponent: String,
    accepted: Boolean,
    currentPlayer: String,
    deck: Array,
    phase: String,
    selectedCard: Number,
    selectedPiece: Number

});

export default mongoose.model('Game', GameSchema);
