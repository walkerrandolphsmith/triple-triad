import Token from './../../models/token/token';
import User from './../../models/user/user';

export function verifyEmail(req, res) {
    Token.findOne({ token: req.body.token, type: 'USER' }, (err, token) => {
        if(err || token === null) {
            return res.status(500).send();
        }
        User.findById(token.userId, (userErr, user) => {
            if(userErr || user === null) {
                return res.status(500).send();
            }
            user.local.verified = true;
            user.save(saveErr => {
                if(saveErr) {
                    return res.status(500).send();
                }
                return res.status(200).send();
            });
        });
    });
}