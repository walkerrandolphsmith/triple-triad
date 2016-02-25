import mongoose from 'mongoose';
import tokenGenerator from './../../utils/tokenGenerator/tokenGenerator';

let UserToken;

let UserTokenSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.ObjectId, index: true},
    token: {type: String, index: true}
});

UserTokenSchema.statics.new = function (userId, fn) {
    let user = new UserToken();
    tokenGenerator(userId).then((token, err) => {
        user.token = token;
        user.userId = userId;
        user.save(fn);
    });
};

UserToken = mongoose.model('UserToken', UserTokenSchema);

export default UserToken;
