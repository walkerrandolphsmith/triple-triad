import UserToken from './../models/userTokens';
import User from './../models/user';
import Game from './../models/game';
import { send_verification_email } from './../utils/mailer';

export function sign_in(req, res) {
    res.json({
        id: req.user._id,
        name: req.user.local.username
    });
}

export function sign_up(req, res) {
    res.json({
        id: req.user._id,
        name: req.user.local.username
    })
}

export function sign_out(req, res) {
    req.logOut();
    res.end();
}

export function verify_email(req, res) {
    const token = req.body.token;
    UserToken.findOne({ 'token': token}, function(err, userToken) {
        if(err || userToken === null) {
            return res.status(500).send();
        }
        else {
            User.findById(userToken.userId, function (err, user) {
                if (err || user === null) {
                    res.status(500).send();
                }
                else {
                    user.local.verified = true;
                    user.save((err, updatedUser) => {
                        if (err) {
                            return res.status(500).send();
                        }
                        else {
                            return res.status(200).send();
                        }
                    });
                }
            });
        }
    });
}

export function resend_verification_email(req, res) {
    const userId = req.body.userId;
    UserToken.findOne({ 'userId': userId}, function(err, userToken) {
        if(err || userToken === null) {
            return res.status(500).send();
        }
        else {
            User.findById(userId, function (err, user) {
                if (err || user === null) {
                    return res.status(500).send();
                }
                else {
                    send_verification_email(user.local.email, userToken.token, (err, response) => {
                        if (err) {
                            return res.status(500).send();
                        }
                        else {
                            return res.json({sent: true});
                        }
                    });
                }
            });
        }
    });
}

export function user_profile(req, res) {
    const userId = req.body.userId;
    User.findById(userId, (err, user) => {
        if(err || user === null) {
            return res.status(500).send();
        }
        else {
            res.json({
                verified: user.local.verified
            });
        }
    });
}

export function create_game(req, res) {
    const deck = req.body.deck;
    const userId = req.body.userId;

    const game = new Game();
    game.owner = userId;
    game.currentPlayer = userId;
    game.deck = deck;
    game.phase = 'settings-selection';

    game.save((err, newGame) => {
       if(err) {
           return  res.status(500).send();
       }
       else{
           return res.status(200).send(newGame);
       }
    });
}

export function get_games(req, res) {
    const userId = req.body.userId;

    Game.find({owner: userId}, (err, games) => {
        if(err) return res.status(500).send();
        return res.send(games);
    });
}