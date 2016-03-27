export function signOut(req, res) {
    req.logOut();
    res.status(200).end();
}