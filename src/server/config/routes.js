import express from 'express';
import bodyparser from 'body-parser';
import User from '../models/user';
import { sign_in, sign_up, sign_out } from './../routes/auth';
import app from './../routes/app';

export default function(passport) {
    return {
        authRouter: configureAuthRoutes(passport),
        gameRouter: configureGameRoutes(passport)
    }
}

function configureAuthRoutes(passport) {
    const router = express.Router();

    router.use(bodyparser.json());

    router.post(
        '/sign_up',
        passport.authenticate('local-signup'),
        (req, res) => {
            sign_up(req, res);
        }
    );

    router.post(
        '/sign_in',
        passport.authenticate('local-login'),
        (req, res) => {
            sign_in(req, res);
        }
    );

    router.get('/sign_out', (req, res) => {
        sign_out(req, res);
    });

    return router;
}

function configureGameRoutes(passport){
    const router = express.Router();

    router.use(
        '/*',
        (req, res) => {
            app(req, res);
        }
    );

    return router;
}