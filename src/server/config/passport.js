import PassportLocal from 'passport-local';
import User from './../models/user';
import UserToken from './../models/userTokens';
import { send_verification_email } from './../utils/mailer';

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
                    return done(null, false);
                } else {
                    var newUser = new User();
                    newUser.local.username = username;
                    newUser.local.email = req.body.email;
                    newUser.local.password = newUser.generateHash(password);
                    newUser.save(function(err, user) {
                        if (err) throw err;
                        UserToken.new(newUser._id, (err, userToken) => {
                            if(err) throw err;
                            send_verification_email(newUser.local.email, userToken.token, (err, res) => {
                                if(err) throw err;
                                return done(null, newUser);
                            });
                        });
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
                    return done(null, false);
                }
                if (!user.validPassword(password)) {
                    return done(null, false)
                }
                return done(null, user);
            });
        }
    ));
}