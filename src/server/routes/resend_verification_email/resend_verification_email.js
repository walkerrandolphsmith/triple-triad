import Token from './../../models/token/token';
import User from './../../models/user/user';
import { send_verification_email } from './../../utils/mailer/mailer';

export function resendVerificationEmail(req, res) {
    const userId = req.body.userId;
    Token.findOne({ 'userId': userId, type: 'USER' }, (err, token) => {
        if(err || token === null) {
            return res.status(500).send();
        }
        else {
            User.findById(userId, (err, user) => {
                if (err || user === null) {
                    return res.status(500).send();
                }
                else {
                    send_verification_email(user.local.email, token.token, (err, response) => {
                        if (err) {
                            return res.status(500).send();
                        }
                        else {
                            return res.json({sent: true});
                        }
                    });
                }
            });
        }
    });
}