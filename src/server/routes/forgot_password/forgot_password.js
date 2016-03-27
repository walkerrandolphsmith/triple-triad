import Token from './../../models/token/token';
import User from './../../models/user/user';
import { sendResetPasswordEmail } from './../../utils/mailer/mailer';

export function forgotPassword(req, res) {
    const email = req.body.email;
    User.findOne({ 'local.email': email }, (err, user) => {
        if(err) {
            res.status(500).send();
        } else if(user === null) {
            res.status(500).send({ invalidEmail: true });
        } else {
            Token.new(user._id, 'RESET', (tokenErr, token) => {
                if(tokenErr) {
                    res.status(500).send();
                } else {
                    sendResetPasswordEmail(email, token.token, () => {
                        res.status(200).send({ sent: true });
                    });
                }
            });
        }
    });
}