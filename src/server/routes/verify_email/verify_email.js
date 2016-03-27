import Token from './../../models/token/token';
import User from './../../models/user/user';

export function verifyEmail(req, res) {
    Token.findOne({ 'token': req.body.token, type: 'USER' }, (err, token) => {
        if(err || token === null) {
            return res.status(500).send();
        } else {
            User.findById(token.userId, (err, user) => {
                if (err || user === null) {
                    res.status(500).send();
                } else {
                    user.local.verified = true;
                    user.save(err => {
                        if(err) {
                            return res.status(500).send();
                        } else {
                            return res.status(200).send();
                        }
                    });
                }
            });
        }
    });
}