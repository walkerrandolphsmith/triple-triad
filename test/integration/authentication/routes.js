import expect from 'expect';
import request from 'supertest';
import mongoose from 'mongoose';
import User from './../../../src/server/models/user';
import UserToken from './../../../src/server/models/userTokens';
import app from './../../../src/server/server';

describe('Passport: routes', () => {

    describe('routes', () => {


        beforeEach(function (done) {

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

        describe('POST /verify_email given a valid token ', () => {

            let id, token;
            beforeEach(done => {
                let newUser = new User();
                newUser.local.username = 'smith';
                newUser.local.email = 'smith@gmail.com';
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


        afterEach(done => {
            User.remove({}, () => { });
            mongoose.disconnect();
            return done();
        });
    });
});
