import express from 'express';
import bodyparser from 'body-parser';
import User from '../models/user';

export default function(passport) {
    const router = express.Router();

    router.use(bodyparser.json());

    router.post('/sign_up', passport.authenticate('local-signup', { session: false}), (req, res) => {
        res.json(req.user);
    });

    router.post('/sign_in', passport.authenticate('local-login', { session: false}), function(req, res) {
        res.json(req.user);
    });

    router.get('/signout', (req, res) => {
        req.logout();
        res.end();
    });
    return router;
}