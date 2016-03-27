import expect from 'expect';
import request from 'supertest';
import connectionManager from './../connectionManager';
import app from './../../src/server/server';

import User from './../../src/server/models/user/user';

describe('/api/signIn', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('POST /signIn given an existing user with valid credentials', () => {
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
                .post('/api/signIn')
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

    describe('POST /signIn given an existing user with invalid credentials', () => {
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
                .post('/api/signIn')
                .send({
                    username: username,
                    password: 'invalid_password'
                })
                .expect(500)
                .end((err, res) => {
                    expect(err).toNotExist();
                    done();
                });
        });
    });

    describe('POST /signIn given an non-existing user', () => {

        it('should give a status code of 401 unauthorized', done => {
            request(app)
                .post('/api/signIn')
                .send({
                    username: 'non-existing-user',
                    password: 'password'
                })
                .expect(500)
                .end((err, res) => {
                    expect(err).toNotExist();
                    done();
                });
        });
    });

});
