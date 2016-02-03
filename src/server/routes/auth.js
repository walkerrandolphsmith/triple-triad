export function sign_in(req, res) {
    res.json({
        id: req.user._id,
        name: req.user.local.username
    });
}

export function sign_up(req, res) {
    res.json({userId: req.user._id})
}

export function sign_out(req, res) {
    req.logOut();
    res.end();
}