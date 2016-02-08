import expect from 'expect';
import request from 'supertest';
import connectionManager from './../connectionManager';
import app from './../../../src/server/server';

import User from './../../../src/server/models/user';

describe('/api/sign_up', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

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
            user.save(error => {
                done();
            });
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
});
