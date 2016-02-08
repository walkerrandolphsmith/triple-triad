import expect from 'expect';
import request from 'supertest';
import connectionManager from './../connectionManager';
import app from './../../../src/server/server';

import User from './../../../src/server/models/user';
import UserToken from './../../../src/server/models/userTokens';

describe('/api/forgot_password', () => {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('POST /forgot_password given an email of existing user', () => {
        let email, id;
        beforeEach(done => {
            email = "walkerrandolphsmith@gamil.com";
            let newUser = new User();
            newUser.local.username = 'walker';
            newUser.local.email = email;
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

        it('should create a new resetToken and send an email', done => {
            request(app)
                .post('/api//forgot_password')
                .send({email: email})
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    expect(res.body.sent).toEqual(true);
                    done();
                });
        });
    });

    describe('POST /forgot_password given an email of that is not associated with an existing user', () => {

        it('should create a new resetToken and send an email', done => {
            request(app)
                .post('/api/forgot_password')
                .send({email: 'nonuser@gmail.com'})
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(500)
                .end((err, res) => {
                    done();
                });
        });
    });

});
