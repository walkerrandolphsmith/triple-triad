import mongoose from 'mongoose';
import tokenGenerator from './../../utils/tokenGenerator/tokenGenerator';

let ResetToken;

let ResetTokenSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.ObjectId, index: true},
    token: {type: String, index: true}
});

ResetTokenSchema.statics.new = function (userId, fn) {
    let resetToken = new ResetToken();
    tokenGenerator(userId).then((token, err) => {
        resetToken.token = token;
        resetToken.userId = userId;
        resetToken.save(fn);
    });
};

ResetToken = mongoose.model('ResetToken', ResetTokenSchema);

export default ResetToken;
