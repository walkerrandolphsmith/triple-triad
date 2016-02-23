import expect from 'expect';
import request from 'supertest';
import connectionManager from './../../../../test/connectionManager';
import app from './../../server';

import User from './../../models/user/user';

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

        it('should throw a 500 server error', done => {
            request(app)
                .post('/api/sign_up')
                .send({
                    username: username,
                    password: 'password'
                })
                .expect(500)
                .end((err, res) => {
                    expect(err).toNotExist();
                    expect(JSON.parse(res.text).field).toEqual('username')
                    done();
                });
        });
    });
});
