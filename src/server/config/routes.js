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
    getGame,
    getGames,
    invite
} from './../routes';

function configureAuthRoutes(passport) {
    const router = express.Router();

    router.post(
        '/signUp',
        (req, res, next) => {
            signUp(req, res, next, passport);
        }
    );

    router.post(
        '/signIn',
        (req, res, next) => {
            signIn(req, res, next, passport);
        }
    );

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

    router.get('/signOut', (req, res) => {
        signOut(req, res);
    });

    router.post(
        '/userProfile',
        (req, res) => {
            userProfile(req, res);
        }
    );

    router.post(
        '/createGame',
        (req, res) => {
            createGame(req, res);
        }
    );

    router.post(
        '/getGame',
        (req, res) => {
            getGame(req, res);
        }
    );

    router.post(
        '/getGames',
        (req, res) => {
            getGames(req, res);
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

function configureGameRoutes(passport, socket) {
    const router = express.Router();

    router.use(
        '/*',
        (req, res) => {
            app(req, res, socket);
        }
    );

    return router;
}

export default function(passport, socket) {
    return {
        authRouter: configureAuthRoutes(passport),
        gameRouter: configureGameRoutes(passport, socket)
    };
}