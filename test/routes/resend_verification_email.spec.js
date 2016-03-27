import expect from 'expect';
import request from 'supertest';
import connectionManager from './../connectionManager';
import app from './../../src/server/server';

import Token from './../../src/server/models/token/token';
import User from './../../src/server/models/user/user';

describe('/api/resendVerificationEmail', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('POST /resendVerificationEmail given a valid user id ', () => {

        let id;
        beforeEach(done => {
            let newUser = new User();
            newUser.local.username = 'walker';
            newUser.local.email = 'walkerrandolphsmith@gmail.com';
            newUser.local.password = newUser.generateHash('password');
            newUser.save(function(err, user) {
                if (err) throw err;
                id = user._id;
                Token.new(id, 'USER', (err, token) => {
                    if(err) throw err;
                    done();
                });
            });
        });

        it('should an email is sent', done => {
            request(app)
                .post('/api/resendVerificationEmail')
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

    describe('POST /resendVerificationEmail given an invalid user id ', () => {

        let id;
        beforeEach(done => {
            let newUser = new User();
            newUser.local.username = 'walker';
            newUser.local.email = 'walkerrandolphsmith@gmail.com';
            newUser.local.password = newUser.generateHash('password');
            newUser.save(function(err, user) {
                if (err) throw err;
                id = user._id;
                Token.new(id, 'USER', (err, token) => {
                    if(err) throw err;
                    done();
                });
            });
        });

        it('should not send an email', done => {
            request(app)
                .post('/api/resendVerificationEmail')
                .send({
                    userId: id + 'bad id'
                })
                .expect(500)
                .end((err, res) => {
                    done();
                });
        });
    });
});
