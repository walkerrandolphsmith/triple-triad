import express from 'express';
import User from '../models/user';
import { sign_in, sign_up, sign_out, verify_email, resend_verification_email, user_profile } from './../routes/auth';
import app from './../routes/app';

export default function(passport) {
    return {
        authRouter: configureAuthRoutes(passport),
        gameRouter: configureGameRoutes(passport)
    }
}

function configureAuthRoutes(passport) {
    const router = express.Router();

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

    router.post(
        '/verify_email',
        (req, res) => {
            verify_email(req, res)
        }
    );

    router.post(
        '/resend_verification_email',
        (req, res) => {
            resend_verification_email(req, res);
        }
    );

    router.get('/sign_out', (req, res) => {
        sign_out(req, res);
    });

    router.post(
        '/user_profile',
        (req, res) => {
            user_profile(req, res)
        }
    );


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