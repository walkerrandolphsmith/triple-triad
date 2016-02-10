import expect from 'expect';
import request from 'supertest';
import connectionManager from './../../../../test/connectionManager';
import app from './../../server';

import UserToken from './../../models/userTokens/userTokens';
import User from './../../models/user/user';

describe('/api/resend_verification_email', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('POST /resend_verification_email given a valid user id ', () => {

        let id;
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
                    done();
                });
            });
        });

        it('should an email is sent', done => {
            request(app)
                .post('/api/resend_verification_email')
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

    describe('POST /resend_verification_email given an invalid user id ', () => {

        let id;
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
                    done();
                });
            });
        });

        it('should not send an email', done => {
            request(app)
                .post('/api/resend_verification_email')
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
