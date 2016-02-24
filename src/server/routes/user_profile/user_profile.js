import User from './../../models/user/user';

export function user_profile(req, res) {
    const userId = req.body.userId;
    User.findById(userId, (err, user) => {
        if(err || user === null) {
            return res.status(500).send();
        }
        else {
            res.status(200).json({
                verified: user.local.verified
            });
        }
    });
}