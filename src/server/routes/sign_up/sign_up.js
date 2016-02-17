export function sign_up(req, res, next, passport) {
    passport.authenticate('local-signup', (err, user, info) => {
        if (user) {
            res.status(200).json({
                id: user._id,
                name: user.local.username
            });
        } else {
            res.status(500).json({
                field: 'username',
                error: err
            });
        }
    })(req, res, next);
}
