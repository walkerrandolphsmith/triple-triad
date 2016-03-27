import Token from './../../models/token/token';
import User from './../../models/user/user';

export function resetPassword(req, res) {
    const { password, confirmPassword } = req.body;

    if(password !== confirmPassword) {
        return res.status(500).send();
    }

    Token.findOne({ token: req.body.token, type: 'RESET' }, (err, token) => {
        if(err || token === null) {
            return res.status(500).send();
        }
        User.findById(token.userId, (userErr, user) => {
            if(userErr || user === null) {
                return res.status(500).send();
            }
            user.local.password = user.generateHash(password);
            user.save((saveErr, updatedUser) => {
                if(saveErr || updatedUser === null) {
                    return res.status(500).send();
                }
                return res.status(200).send();
            });
        });
    });
}