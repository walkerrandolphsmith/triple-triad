import mongoose from 'mongoose';

let GameSchema = new mongoose.Schema({
    owner: String,
    opponent: String,
    currentPlayer: String,
    deck: Array,
    phase: String
});

export default mongoose.model('Game', GameSchema);
