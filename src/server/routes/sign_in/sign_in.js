export function sign_in(req, res, next, passport) {
    passport.authenticate('local-login', (err, user, info) => {
        if (user) {
            res.status(200).json({
                id: user._id,
                name: user.local.username
            });
        }
        else if(err){
            res.status(500).json({
                field: 'username',
                error: err
            });
        }
        else {
            res.status(500).json({
                field: 'username',
                error: info.message
            });
        }
    })(req, res, next);
}