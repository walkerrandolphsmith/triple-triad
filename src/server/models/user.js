import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';

let Schema = mongoose.Schema;
mongoose.models = {};
mongoose.modelSchemas = {};

var UserSchema = mongoose.Schema({
    local: {
        username: { type: String, unique: true },
        password: String,
        email: String
    }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

export default mongoose.model('User', UserSchema);