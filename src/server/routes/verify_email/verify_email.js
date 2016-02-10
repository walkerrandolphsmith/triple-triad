import UserToken from './../../models/userTokens/userTokens';
import User from './../../models/user/user';

export function verify_email(req, res) {
    const token = req.body.token;
    UserToken.findOne({ 'token': token}, function(err, userToken) {
        if(err || userToken === null) {
            return res.status(500).send();
        }
        else {
            User.findById(userToken.userId, function (err, user) {
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