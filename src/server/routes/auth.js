import UserToken from './../models/userTokens';
import User from './../models/user';
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

export function verify_email(req, res) {
    const token = req.body.token;
    UserToken.findOne({ 'token': token}, function(err, userToken) {
        if(err) console.error(err);
        else {
            User.findById(userToken.userId, function(err, user) {
                if(err) console.error(err);
                user.local.verified = true;
                user.save((err, updatedUser) => {
                    if(err) console.error(err);
                    console.log(err, updatedUser);
                });
            });
        }
    });
}

export function resend_verification_email(req, res) {
    const userId = req.body.userId;
    console.log(req.body);
    UserToken.findOne({ 'userId': userId}, function(err, userToken) {
        if(err) console.error(err);
        else {
            User.findById(userId, function(err, user) {
                if(err) console.error(err);
                send_verification_email(user.local.email, userToken.token, (err, response) => {
                    if(err) throw err;
                    console.log(response);
                    res.send({});
                });
            });
        }
    });
}

export function sign_out(req, res) {
    req.logOut();
    res.end();
}

export function user_profile(req, res) {
    const userId = req.body.userId;
    User.findById(userId, (err, user) => {
        if(err) console.error(err);
        res.json({
            verified: user.local.verified
        });
    });
}