export function sign_in(req, res) {
    res.json({
        id: req.user._id,
        name: req.user.local.username
    });
}