import UserToken from './../../models/userTokens/userTokens';
import User from './../../models/user/user';
import { send_verification_email } from './../../utils/mailer';

export function resend_verification_email(req, res) {
    const userId = req.body.userId;
    UserToken.findOne({ 'userId': userId}, function(err, userToken) {
        if(err || userToken === null) {
            return res.status(500).send();
        }
        else {
            User.findById(userId, function (err, user) {
                if (err || user === null) {
                    return res.status(500).send();
                }
                else {
                    send_verification_email(user.local.email, userToken.token, (err, response) => {
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