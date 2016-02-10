export function sign_out(req, res) {
    req.logOut();
    res.status(200).end();
}