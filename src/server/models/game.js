import mongoose from 'mongoose';

let GameSchema = new mongoose.Schema({
    owner: Number,
    opponent: Number,
    currentPlayer: Number,
    deck: Array,
    phase: String
});

export default mongoose.model('Game', GameSchema);
