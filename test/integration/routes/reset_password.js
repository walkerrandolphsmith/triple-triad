import expect from 'expect';
import request from 'supertest';
import connectionManager from './../connectionManager';
import app from './../../../src/server/server';

import User from './../../../src/server/models/user';
import ResetToken from './../../../src/server/models/resetTokens';

describe('/api/reset_password', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('POST /reset_password given a valid token and a passwords that match', () => {

        let token;
        beforeEach(done =>  {
            let password = 'password';
            let user = new User({
                local: {
                    username: 'tester',
                    password: password,
                    email: 'testbot@gmail.com'
                }
            });
            user.local.password = user.generateHash(password);
            user.save(error => {
                ResetToken.new(user._id, (err, resetToken) => {
                    if(err) throw err;
                    token = resetToken.token;
                    done();
                });
            });

        });

        it('should return a status of 200 OK', done => {
            request(app)
                .post('/api/reset_password')
                .send({
                    token: token,
                    password: 'newPassword',
                    confirmPassword: 'newPassword'
                })
                .expect(200)
                .end((err, res) => {
                    expect(err).toNotExist();
                    done();
                });
        });
    });

    describe('POST /reset_password given an invalid token and a passwords that match', () => {

        let token;
        beforeEach(done =>  {
            let password = 'password';
            let user = new User({
                local: {
                    username: 'tester',
                    password: password,
                    email: 'testbot@gmail.com'
                }
            });
            user.local.password = user.generateHash(password);
            user.save(error => {
                ResetToken.new(user._id, (err, resetToken) => {
                    if(err) throw err;
                    token = resetToken.token;
                    done();
                });
            });

        });

        it('should return a status of 500 server error', done => {
            request(app)
                .post('/api/reset_password')
                .send({
                    token: `invalid${token}`,
                    password: 'newPassword',
                    confirmPassword: 'newPassword'
                })
                .expect(500)
                .end((err, res) => {
                    expect(err).toNotExist();
                    done();
                });
        });
    });

    describe('POST /reset_password given a valid token and mismatching passwords', () => {

        let token;
        beforeEach(done =>  {
            let password = 'password';
            let user = new User({
                local: {
                    username: 'tester',
                    password: password,
                    email: 'testbot@gmail.com'
                }
            });
            user.local.password = user.generateHash(password);
            user.save(error => {
                ResetToken.new(user._id, (err, resetToken) => {
                    if(err) throw err;
                    token = resetToken.token;
                    done();
                });
            });

        });

        it('should return a status of 500 server error', done => {
            request(app)
                .post('/api/reset_password')
                .send({
                    token: token,
                    password: 'newPassword',
                    confirmPassword: 'differentPassword'
                })
                .expect(500)
                .end((err, res) => {
                    expect(err).toNotExist();
                    done();
                });
        });
    });

    describe('POST /reset_password given an invalid token and mismatching passwords', () => {

        let token;
        beforeEach(done =>  {
            let password = 'password';
            let user = new User({
                local: {
                    username: 'tester',
                    password: password,
                    email: 'testbot@gmail.com'
                }
            });
            user.local.password = user.generateHash(password);
            user.save(error => {
                ResetToken.new(user._id, (err, resetToken) => {
                    if(err) throw err;
                    token = resetToken.token;
                    done();
                });
            });

        });

        it('should return a status of 500 server error', done => {
            request(app)
                .post('/api/reset_password')
                .send({
                    token: `invalid${token}`,
                    password: 'newPassword',
                    confirmPassword: 'differentPassword'
                })
                .expect(500)
                .end((err, res) => {
                    expect(err).toNotExist();
                    done();
                });
        });
    });
});
