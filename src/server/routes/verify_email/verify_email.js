import Token from './../../models/token/token';
import User from './../../models/user/user';

export function verify_email(req, res) {
    Token.findOne({ 'token': req.body.token}, function(err, token) {
        if(err || token === null) {
            return res.status(500).send();
        }
        else {
            User.findById(token.userId, function (err, user) {
                if (err || user === null) {
                    res.status(500).send();
                }
                else {
                    user.local.verified = true;
                    user.save((err, updatedUser) => {
                        if (err) {
                            return res.status(500).send();
                        }
                        else {
                            return res.status(200).send();
                        }
                    });
                }
            });
        }
    });
}