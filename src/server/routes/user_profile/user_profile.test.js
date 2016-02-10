import expect from 'expect';
import request from 'supertest';
import connectionManager from './../../../../test/connectionManager';
import app from './../../server';

import UserToken from './../../models/userTokens/userTokens';
import User from './../../models/user/user';

describe('/api/user_profile', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('POST /user_profile given a valid user id', () => {

        let id;
        beforeEach(done =>  {
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

        it('should return the user details', done => {
            request(app)
                .post('/api/user_profile')
                .send({
                    userId: id
                })
                .expect(200)
                .end((err, res) => {
                    User.findById(id, (err, user) => {
                        expect(user.local.verified).toEqual(res.body.verified);
                        done();
                    });
                });
        });
    });

    describe('POST /user_profile given an invalid user id', () => {

        let id;
        beforeEach(done =>  {
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

        it('should return a 500 server error status', done => {
            request(app)
                .post('/api/user_profile')
                .send({
                    userId: 5
                })
                .expect(500)
                .end((err, res) => {
                    done();
                });
        });
    });

    describe('POST /user_profile given an invalid user id', () => {

        let id;
        beforeEach(done =>  {
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

        it('should return a 500 server error status', done => {
            request(app)
                .post('/api/user_profile')
                .send({
                    userId: 5
                })
                .expect(500)
                .end((err, res) => {
                    done();
                });
        });
    });
});
