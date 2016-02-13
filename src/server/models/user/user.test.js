import expect from 'expect';
import mongoose from 'mongoose';
import connectionManager from './../../../../test/connectionManager';
import User from './user';


describe('User', function() {

    beforeEach(connectionManager.connect);
    afterEach(connectionManager.disconnect);

    describe('Given a account is created with a unique username', () => {
        let user;
        beforeEach(function(done) {
            user = new User({
                local: {
                    username: 'tester',
                    password: 'password',
                    email: 'testbot@gmail.com'
                }
            });

            user.save(error => { done(); });
        });

        it('should find a user by username', function(done) {
            User.findOne({ "local.username": 'tester' }, (err, user) => {
                expect(user.local.username).toEqual('tester');
                expect(user.local.email).toEqual('testbot@gmail.com');
                expect(user.local.password).toNotBe(undefined);
                done();
            });
        });
    });

    describe('Given a account is created with a username that already exists', () => {
        let user, duplicateUser;
        beforeEach(function(done) {
            user = new User({
                local: {
                    username: 'tester',
                    password: 'password',
                    email: 'testbot@gmail.com'
                }
            });

            duplicateUser = new User({
                local: {
                    username: 'tester',
                    password: 'password',
                    email: 'testbot@gmail.com'
                }
            });

            user.save(error => { done(); });
        });

        it('should throw an error', function(done) {
            duplicateUser.save(error => {
                expect(error).toNotEqual(null);
                done();
            });
        });
    });

    describe('Hashing a password', () => {

        let password, user;
        beforeEach(done => {
            password = 'secret';
            user = new User({
                local: {
                    username: 'tester',
                    password: password,
                    email: 'testbot@gmail.com'
                }
            });
            user.save(error => { done(); });
        });

        it('should return a hashed password', done => {
            user.generateHash(password, (err, passwordHash) => {
                expect(err).toNotExist();
                expect(err).toExist(passwordHash);
            });
            done();
        });
    });

    describe('when validating a valid password hash', () => {

        let password, user;
        beforeEach(done => {
            password = 'secret';
            user = new User({
                local: {
                    username: 'tester',
                    password: password,
                    email: 'testbot@gmail.com'
                }
            });
            user.save(error => { done(); });
        });

        it('should return true when the password hash can be validated', done => {
            user.generateHash(password, (err, passwordHash) => {
                expect(user.validPassword(passwordHash)).toEqual(true);
            });
            done();
        });
    });

    describe('when validating an invalid password hash', () => {

        let password, user;
        beforeEach(done => {
            password = 'secret';
            user = new User({
                local: {
                    username: 'tester',
                    password: password,
                    email: 'testbot@gmail.com'
                }
            });
            user.save(error => { done(); });
        });

        it('should return true when the password hash can be validated', done => {
            user.generateHash(password, (err, passwordHash) => {
                expect(user.validPassword('invalid'+passwordHash)).toEqual(false);
            });
            done();
        });
    });
});