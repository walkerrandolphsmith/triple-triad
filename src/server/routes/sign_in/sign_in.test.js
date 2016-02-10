import expect from 'expect';
import request from 'supertest';
import connectionManager from './../../../../test/connectionManager';
import app from './../../server';

import User from './../../models/user/user';

describe('/api/sign_in', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

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

});
