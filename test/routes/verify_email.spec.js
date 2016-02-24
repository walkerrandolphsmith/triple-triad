import expect from 'expect';
import request from 'supertest';
import connectionManager from './../connectionManager';
import app from './../../src/server/server';

import UserToken from './../../src/server/models/userTokens/userTokens';
import User from './../../src/server/models/user/user';

describe('/api/verify_email', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

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
});
