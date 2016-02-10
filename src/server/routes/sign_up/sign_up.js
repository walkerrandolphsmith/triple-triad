export function sign_up(req, res) {
    res.json({
        id: req.user._id,
        name: req.user.local.username
    })
}
