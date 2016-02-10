import ResetToken from './../../models/resetTokens/resetTokens';
import User from './../../models/user/user';
import { send_reset_password_email } from './../../utils/mailer';

export function forgot_password(req, res) {
    const email = req.body.email;
    User.findOne({'local.email': email}, (err, user) => {
        if(err || user === null){
            res.status(500).send();
        }
        else{
            ResetToken.new(user._id, (err, resetToken) => {
                if(err){
                    res.status(500).send();
                }
                else{
                    send_reset_password_email(email, resetToken.token, (err, mail) => {
                        res.status(200).send({sent: true});
                    });
                }
            });
        }
    });
}