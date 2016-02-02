import express from 'express';
import bodyparser from 'body-parser';
import User from '../models/user';
import { sign_in, sign_up, sign_out } from './../routes/auth';
import game from './../routes/game';

export default function(passport) {
    return {
        authRouter: configureAuthRoutes(passport),
        gameRouter: configureGameRoutes()
    }
}

function configureAuthRoutes(passport) {
    const router = express.Router();

    router.use(bodyparser.json());

    router.post(
        '/sign_up',
        passport.authenticate('local-signup', { session: false}),
        (req, res) => {
            sign_up(req, res);
        }
    );

    router.post(
        '/sign_in',
        passport.authenticate('local-login', { session: false}),
        (req, res) => {
            sign_in(req, res);
        }
    );

    router.get('/signout', (req, res) => {
        sign_out(req, res);
    });

    return router;
}

function configureGameRoutes(){
    const router = express.Router();

    router.use('/*', (req, res) => {
        game(req, res);
    });

    return router;
}