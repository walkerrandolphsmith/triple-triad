import Token from './../../models/token/token';
import User from './../../models/user/user';
import { sendVerificationEmail } from './../../utils/mailer/mailer';

export function resendVerificationEmail(req, res) {
    const userId = req.body.userId;
    Token.findOne({ userId: userId, type: 'USER' }, (err, token) => {
        if(err || token === null) {
            return res.status(500).send();
        } else {
            User.findById(userId, (userErr, user) => {
                if(userErr || user === null) {
                    return res.status(500).send();
                } else {
                    sendVerificationEmail(user.local.email, token.token, emailErr => {
                        if(emailErr) {
                            return res.status(500).send();
                        } else {
                            return res.json({ sent: true });
                        }
                    });
                }
            });
        }
    });
}