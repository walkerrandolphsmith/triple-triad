import PassportLocal from 'passport-local';
import User from './../models/user/user';
import Token from './../models/token/token';
import { send_verification_email } from './../utils/mailer/mailer';

export default function(passport) {
    const LocalStrategy = PassportLocal.Strategy;

    passport.serializeUser(function(user, done) {
        done(null, {id: user._id, name: user.local.username});
    });

    passport.deserializeUser(function(user, done) {
        User.findById(user.id, function(err, u) {
            done(err, u);
        });
    });

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, username, password, done) {
            User.findOne({ 'local.username': username}, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (user) {
                    return done(null, false, {message: 'User already exists.'});
                } else {
                    var newUser = new User();
                    newUser.local.username = username;
                    newUser.local.email = req.body.email;
                    newUser.local.password = newUser.generateHash(password);
                    newUser.save(function(err, user) {
                        if (err) {
                            return done(err);
                        }else {
                            Token.new(newUser._id, 'USER', (err, token) => {
                                if (err) {
                                    return done(err);
                                }else {
                                    send_verification_email(newUser.local.email, token.token, (err, res) => {
                                        if (err) {
                                            return done(err);
                                        }else {
                                            return done(null, newUser);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    ));

    passport.use('local-login', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, username, password, done) {
            User.findOne({ 'local.username': username}, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {message: `${username} does not exist`});
                }
                if (!user.validPassword(password)) {
                    return done(null, false, {message: 'Username and password do not exist'})
                }
                return done(null, user);
            });
        }
    ));
}