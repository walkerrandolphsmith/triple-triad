import crypto from 'crypto';
import mongoose from 'mongoose';

let ResetToken;

let ResetTokenSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.ObjectId, index: true},
    token: {type: String, index: true}
});

ResetTokenSchema.statics.new = function (userId, fn) {
    let user = new ResetToken();
    crypto.randomBytes(48, function (ex, buf) {
        let token = buf.toString('base64')
            .replace(/\//g, '_')
            .replace(/\+/g, '-');
        user.token = `${userId}-${token.toString().slice(1,24)}`;
        user.userId = userId;
        user.save(fn);
    });
};

ResetToken = mongoose.model('ResetToken', ResetTokenSchema);

export default ResetToken;
