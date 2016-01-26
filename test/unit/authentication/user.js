import expect from 'expect';
import mongoose from 'mongoose';
import User from './../../../src/server/models/user';


describe('User', function() {

    let db;
    before(function(done) {
        db = mongoose.connect('mongodb://localhost/test');
        done();
    });

    after(function(done) {
        mongoose.connection.close();
        done();
    });

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

    afterEach(function(done) {
        User.remove({}, () => { done(); });
    });

});