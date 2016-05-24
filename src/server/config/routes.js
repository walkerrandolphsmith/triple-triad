import express from 'express';
import {
    app,
    verifyEmail,
    resendVerificationEmail,
    invite
} from './../routes';

function configureAuthRoutes() {
    const router = express.Router();

    router.post(
        '/verifyEmail',
        (req, res) => {
            verifyEmail(req, res);
        }
    );

    router.post(
        '/resendVerificationEmail',
        (req, res) => {
            resendVerificationEmail(req, res);
        }
    );

    router.post(
        '/invite',
        (req, res) => {
            invite(req, res);
        }
    );

    return router;
}

function configureGameRoutes() {
    const router = express.Router();

    router.use(
        '/',
        (req, res) => {
            app(req, res);
        }
    );

    return router;
}

export default function() {
    return {
        authRouter: configureAuthRoutes(),
        gameRouter: configureGameRoutes()
    };
}