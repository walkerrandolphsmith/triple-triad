import ResetToken from './../../models/resetTokens/resetTokens';
import User from './../../models/user/user';

export function reset_password(req, res) {
    const { token, password, confirmPassword } = req.body;

    if(password !== confirmPassword) return res.status(500).send();

    ResetToken.findOne({token: token}, (err, resetToken) => {
        if(err || resetToken === null) {
            return res.status(500).send();
        }else {
            User.findById(resetToken.userId, (err, user) => {
                if(err || user === null){
                    return res.status(500).send()
                }else {
                    user.local.password = password;
                    user.save((err, updatedUser) => {
                        if(err || updatedUser === null){
                            return res.status(500).send();
                        }else {
                            return res.status(200).send();
                        }
                    })
                }
            });
        }
    })
}