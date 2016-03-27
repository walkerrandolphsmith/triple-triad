import mongoose from 'mongoose';
import tokenGenerator from './../../utils/token/tokenGenerator/tokenGenerator';

let Token;

let TokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        index: true
    },
    token: {
        type: String,
        index: true
    },
    type: {
        type: String
    }
});

TokenSchema.statics.new = function(userId, type, fn) {
    let user = new Token();
    tokenGenerator(userId).then(token => {
        user.token = token;
        user.userId = userId;
        user.type = type;
        user.save(fn);
    });
};

Token = mongoose.model('Token', TokenSchema);

export default Token;
