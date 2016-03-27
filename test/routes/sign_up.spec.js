import expect from 'expect';
import request from 'supertest';
import connectionManager from './../connectionManager';
import app from './../../src/server/server';

import User from './../../src/server/models/user/user';

describe('/api/signUp', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('POST /signUp given a valid username and password', () => {
        it('should give a status code 200 Ok', done => {
            request(app)
                .post('/api/signUp')
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

    describe('POST /signUp given an existing username', () => {
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
                .post('/api/signUp')
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
