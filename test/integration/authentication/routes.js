import expect from 'expect';
import request from 'supertest';
import mongoose from 'mongoose';
import User from './../../../src/server/models/user';
import UserToken from './../../../src/server/models/userTokens';
import Game from './../../../src/server/models/game';
import app from './../../../src/server/server';

describe('Passport: routes', () => {

    describe('routes', () => {


        beforeEach(done => {

            function clearDB() {
                for (var i in mongoose.connection.collections) {
                    mongoose.connection.collections[i].remove();
                }
                return done();
            }


            function reconnect() {
                mongoose.connect('mongodb://localhost/test', err => {
                    if (err) {
                        throw err;
                    }
                    return clearDB();
                });
            }

            function checkState() {
                switch (mongoose.connection.readyState) {
                    case 0:
                        reconnect();
                        break;
                    case 1:
                        clearDB();
                        break;
                    default:
                        process.nextTick(checkState);
                }
            }

            checkState();
        });

        describe('POST /sign_up given a valid username and password', () => {
            it('should give a status code 200 Ok', done => {
                request(app)
                    .post('/api/sign_up')
                    .send({
                        username: 'tester',
                        password: 'password',
                        email: 'test@gmail.com'
                    })
                    .expect(200)
                    .end((err, res) => {
                        expect(err).toNotExist();
                        done();
                    });
            });
        });

        describe('POST /sign_up given an existing username', () => {
            let user, username;
            beforeEach(done => {
                username = 'tester';
                user = new User({
                    local: {
                        username: username,
                        password: 'password',
                        email: 'testbot@gmail.com'
                    }
                });
                user.save(error => { done(); });
            });

            it('should throw a 401 unauthorized', done => {
                request(app)
                    .post('/api/sign_up')
                    .send({
                        username: username,
                        password: 'password'
                    })
                    .expect(401)
                    .end((err, res) => {
                        expect(err).toNotExist();
                        done();
                    });
            });
        });

        describe('POST /sign_in given an existing user with valid credentials', () => {
            let user, username, password;
            beforeEach(done => {
                username = 'tester';
                password = 'password';
                user = new User({
                    local: {
                        username: username,
                        password: password,
                        email: 'testbot@gmail.com'
                    }
                });
                user.local.password = user.generateHash(password);
                user.save(error => { done(); });
            });

            it('should give a status code of 200 Ok', done => {
                request(app)
                    .post('/api/sign_in')
                    .send({
                        username: username,
                        password: password
                    })
                    .expect(200)
                    .end((err, res) => {
                        expect(err).toNotExist();
                        done();
                    });
            });
        });

        describe('POST /sign_in given an existing user with invalid credentials', () => {
            let user, username, password;
            beforeEach(done => {
                username = 'tester';
                password = 'password';
                user = new User({
                    local: {
                        username: username,
                        password: password,
                        email: 'testbot@gmail.com'
                    }
                });
                user.local.password = user.generateHash(password);
                user.save(error => { done(); });
            });

            it('should give a status code of 401 unauthorized', done => {
                request(app)
                    .post('/api/sign_in')
                    .send({
                        username: username,
                        password: 'invalid_password'
                    })
                    .expect(401)
                    .end((err, res) => {
                        expect(err).toNotExist();
                        done();
                    });
            });
        });

        describe('POST /sign_in given an non-existing user', () => {

            it('should give a status code of 401 unauthorized', done => {
                request(app)
                    .post('/api/sign_in')
                    .send({
                        username: 'non-existing-user',
                        password: 'password'
                    })
                    .expect(401)
                    .end((err, res) => {
                        expect(err).toNotExist();
                        done();
                    });
            });
        });

        describe('POST /sign_out', () => {

            it('should return a status 200 OK', done => {
                request(app)
                    .post('/api/sign_out')
                    .expect(200)
                    .end((err, res) => {
                        expect(err).toNotExist();
                        done();
                    });
            });
        });


        describe('POST /verify_email given a valid token ', () => {

            let id, token;
            beforeEach(done => {
                let newUser = new User();
                newUser.local.username = 'walker';
                newUser.local.email = 'walkerrandolphsmith@gmail.com';
                newUser.local.password = newUser.generateHash('password');
                newUser.save(function(err, user) {
                    if (err) throw err;
                    id = user._id;
                    UserToken.new(id, (err, userToken) => {
                        if(err) throw err;
                        token = userToken.token;
                        done();
                    });
                });
            });

            it('should altered the verified state of the user', done => {
                request(app)
                    .post('/api/verify_email')
                    .send({
                        token: token
                    })
                    .expect(200)
                    .end((err, res) => {
                        User.findById(id, (err, user) => {
                            expect(user.local.verified).toEqual(true);
                            done();
                        });
                    });
            });
        });

        describe('POST /verify_email given a invalid token ', () => {

            let id, token;
            beforeEach(done => {
                let newUser = new User();
                newUser.local.username = 'walker';
                newUser.local.email = 'walkerrandolphsmith@gmail.com';
                newUser.local.password = newUser.generateHash('password');
                newUser.save(function(err, user) {
                    if (err) throw err;
                    id = user._id;
                    UserToken.new(id, (err, userToken) => {
                        if(err) throw err;
                        token = userToken.token;
                        done();
                    });
                });
            });

            it('should return a 500 server error', done => {
                request(app)
                    .post('/api/verify_email')
                    .send({
                        token: token + "bad token"
                    })
                    .expect(500)
                    .end((err, res) => {
                        done();
                    });
            });
        });

        describe('POST /resend_verification_email given a valid user id ', () => {

            let id;
            beforeEach(done => {
                let newUser = new User();
                newUser.local.username = 'walker';
                newUser.local.email = 'walkerrandolphsmith@gmail.com';
                newUser.local.password = newUser.generateHash('password');
                newUser.save(function(err, user) {
                    if (err) throw err;
                    id = user._id;
                    UserToken.new(id, (err, userToken) => {
                        if(err) throw err;
                        done();
                    });
                });
            });

            it('should an email is sent', done => {
                request(app)
                    .post('/api/resend_verification_email')
                    .send({
                        userId: id
                    })
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body.sent).toEqual(true);
                        done();
                    });
            });
        });

        describe('POST /resend_verification_email given an invalid user id ', () => {

            let id;
            beforeEach(done => {
                let newUser = new User();
                newUser.local.username = 'walker';
                newUser.local.email = 'walkerrandolphsmith@gmail.com';
                newUser.local.password = newUser.generateHash('password');
                newUser.save(function(err, user) {
                    if (err) throw err;
                    id = user._id;
                    UserToken.new(id, (err, userToken) => {
                        if(err) throw err;
                        done();
                    });
                });
            });

            it('should not send an email', done => {
                request(app)
                    .post('/api/resend_verification_email')
                    .send({
                        userId: id + 'bad id'
                    })
                    .expect(500)
                    .end((err, res) => {
                        done();
                    });
            });
        });

        describe('POST /user_profile given a valid user id', () => {

            let id;
            beforeEach(done =>  {
                let newUser = new User();
                newUser.local.username = 'walker';
                newUser.local.email = 'walkerrandolphsmith@gmail.com';
                newUser.local.password = newUser.generateHash('password');
                newUser.save(function(err, user) {
                    if (err) throw err;
                    id = user._id;
                    UserToken.new(id, (err, userToken) => {
                        if(err) throw err;
                        done();
                    });
                });
            });

            it('should return the user details', done => {
               request(app)
                    .post('/api/user_profile')
                    .send({
                       userId: id
                    })
                    .expect(200)
                    .end((err, res) => {
                       User.findById(id, (err, user) => {
                           expect(user.local.verified).toEqual(res.body.verified);
                           done();
                       });
                    });
            });
        });

        describe('POST /user_profile given an invalid user id', () => {

            let id;
            beforeEach(done =>  {
                let newUser = new User();
                newUser.local.username = 'walker';
                newUser.local.email = 'walkerrandolphsmith@gmail.com';
                newUser.local.password = newUser.generateHash('password');
                newUser.save(function(err, user) {
                    if (err) throw err;
                    id = user._id;
                    UserToken.new(id, (err, userToken) => {
                        if(err) throw err;
                        done();
                    });
                });
            });

            it('should return a 500 server error status', done => {
                request(app)
                    .post('/api/user_profile')
                    .send({
                        userId: 5
                    })
                    .expect(500)
                    .end((err, res) => {
                        done();
                    });
            });
        });

        describe('POST /user_profile given an invalid user id', () => {

            let id;
            beforeEach(done =>  {
                let newUser = new User();
                newUser.local.username = 'walker';
                newUser.local.email = 'walkerrandolphsmith@gmail.com';
                newUser.local.password = newUser.generateHash('password');
                newUser.save(function(err, user) {
                    if (err) throw err;
                    id = user._id;
                    UserToken.new(id, (err, userToken) => {
                        if(err) throw err;
                        done();
                    });
                });
            });

            it('should return a 500 server error status', done => {
                request(app)
                    .post('/api/user_profile')
                    .send({
                        userId: 5
                    })
                    .expect(500)
                    .end((err, res) => {
                        done();
                    });
            });
        });

        describe('POST /create_game given a user id and deck', () => {

            let id, deck;
            beforeEach(() =>  {
                id = '100';
                deck = [{id: 0}, {id: 1}];
            });

            it(`should return a status of 200 OK
                return a game with the owner and deck set to the given owner id and deck
                and a current player set to given owner
                and a phase set to settings-selection`, done => {
                request(app)
                    .post('/api/create_game')
                    .send({
                        userId: id,
                        deck: deck
                    })
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body.owner).toEqual(id);
                        expect(res.body.currentPlayer).toEqual(id);
                        expect(res.body.deck).toEqual(deck);
                        expect(res.body.phase).toEqual('settings-selection');
                        done();
                    });
            });
        });

        describe('POST /get_games given a user id', () => {

            let newGame, id;
            beforeEach(done =>  {
                id = '1';

                newGame = new Game({
                    owner: id
                });

                newGame.save(error => { done(); })
            });

            it('should return a status of 200 OK return a collection of games', done => {
                request(app)
                    .post('/api/get_games')
                    .send({
                        userId: id
                    })
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body[0].owner).toEqual(id);
                        done();
                    });
            });
        });

        afterEach(done => {
            User.remove({}, () => { });
            Game.remove({}, () => { });
            UserToken.remove({}, () => { });
            mongoose.disconnect();
            return done();
        });
    });
});
