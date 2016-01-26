import expect from 'expect';
import request from 'supertest';
import mongoose from 'mongoose';
import User from './../../../src/server/models/user';
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

        describe('GET /badRoute a route that does not exist', () => {
            it('should throw a 404 Not found', done => {
                request(app)
                    .get('/api/badRoute')
                    .expect(404)
                    .end((err, res) => {
                        expect(err).toNotExist();
                        done();
                    });
            });
        });

        describe('POST /sign_up given a valid username and password', () => {
            it('should give a status code 200 Ok', done => {
                request(app)
                    .post('/api/sign_up')
                    .send({
                        username: 'tester',
                        password: 'password'
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

        afterEach(done => {
            User.remove({}, () => { });
            mongoose.disconnect();
            return done();
        });
    });
});
