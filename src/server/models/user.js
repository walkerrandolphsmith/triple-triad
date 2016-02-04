import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';

var UserSchema = mongoose.Schema({
    local: {
        username: { type: String, unique: true },
        password: String,
        email: String,
        verified: { type: Boolean, default: false }
    }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

export default mongoose.model('User', UserSchema);