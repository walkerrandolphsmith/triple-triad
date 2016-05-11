import express from 'express';
import {
    app,
    signIn,
    signUp,
    signOut,
    verifyEmail,
    resendVerificationEmail,
    forgotPassword,
    resetPassword,
    userProfile,
    createGame,
    deleteGame,
    getGame,
    getGames,
    invite
} from './../routes';

function configureAuthRoutes(passport) {
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
        '/forgotPassword',
        (req, res) => {
            forgotPassword(req, res);
        }
    );

    router.post(
        '/resetPassword',
        (req, res) => {
            resetPassword(req, res);
        }
    );

    router.post(
        '/userProfile',
        (req, res) => {
            userProfile(req, res);
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

function configureGameRoutes(passport) {
    const router = express.Router();

    router.use(
        '/*',
        (req, res) => {
            app(req, res);
        }
    );

    return router;
}

export default function(passport) {
    return {
        authRouter: configureAuthRoutes(passport),
        gameRouter: configureGameRoutes(passport)
    };
}