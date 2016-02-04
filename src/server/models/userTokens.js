import crypto from 'crypto';
import mongoose from 'mongoose';

let UserToken;

let UserTokenSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.ObjectId, index: true},
    token: {type: String, index: true}
});

UserTokenSchema.statics.new = function (userId, fn) {
    let user = new UserToken();
    crypto.randomBytes(48, function (ex, buf) {
        let token = buf.toString('base64')
            .replace(/\//g, '_')
            .replace(/\+/g, '-');
        user.token = `${userId}|${token.toString().slice(1,24)}`;
        user.userId = userId;
        user.save(fn);
    });
};

UserToken = mongoose.model('UserToken', UserTokenSchema);

export default UserToken;
