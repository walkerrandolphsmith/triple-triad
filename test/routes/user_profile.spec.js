import expect from 'expect';
import request from 'supertest';
import connectionManager from './../connectionManager';
import app from './../../src/server/server';

import Token from './../../src/server/models/token/token';
import User from './../../src/server/models/user/user';

describe('/api/userProfile', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('POST /userProfile given a valid user id', () => {

        let id;
        beforeEach(done =>  {
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

        it('should return the user details', done => {
            request(app)
                .post('/api/userProfile')
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

    describe('POST /userProfile given an invalid user id', () => {

        let id;
        beforeEach(done =>  {
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

        it('should return a 500 server error status', done => {
            request(app)
                .post('/api/userProfile')
                .send({
                    userId: 5
                })
                .expect(500)
                .end((err, res) => {
                    done();
                });
        });
    });

    describe('POST /userProfile given an invalid user id', () => {

        let id;
        beforeEach(done =>  {
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

        it('should return a 500 server error status', done => {
            request(app)
                .post('/api/userProfile')
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
