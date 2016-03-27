import Token from './../../models/token/token';
import User from './../../models/user/user';
import { send_reset_password_email } from './../../utils/mailer/mailer';

export function forgot_password(req, res) {
    const email = req.body.email;
    User.findOne({ 'local.email': email }, (err, user) => {
        if(err) {
            res.status(500).send();
        } else if(user === null) {
            res.status(500).send({ invalidEmail: true })
        }
        else {
            Token.new(user._id, 'RESET', (err, token) => {
                if(err) {
                    res.status(500).send();
                } else {
                    send_reset_password_email(email, token.token, () => {
                        res.status(200).send({ sent: true });
                    });
                }
            });
        }
    });
}