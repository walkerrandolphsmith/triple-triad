import Token from './../../models/token/token';
import User from './../../models/user/user';

export function reset_password(req, res) {
    const { password, confirmPassword } = req.body;

    if(password !== confirmPassword) return res.status(500).send();

    Token.findOne({token: req.body.token}, (err, token) => {
        if(err || token === null) {
            return res.status(500).send();
        }else {
            User.findById(token.userId, (err, user) => {
                if(err || user === null){
                    return res.status(500).send()
                }else {
                    user.local.password = user.generateHash(password);
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