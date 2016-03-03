import expect from 'expect';
import { sign_in } from './sign_in';

describe('sign_in', () => {

    let req, res, passport;
    req = {};
    describe('Given a request and response and passport, when passport successfully authenticates', () => {

        let user, status, json, logIn;
        beforeEach(() => {
            user = { _id: 20, local: { username: 'tester' } };
            passport = {
                authenticate: (strategy, fn) => {
                    fn(null, user, null);
                    return (req, res, next) => {};
                }
            };

            req = {
                logIn: (user, cb) => cb()
            };
            logIn = expect.spyOn(req, 'logIn').andCallThrough();

            json = expect.createSpy();
            res = {
                status: () => ({
                    json: json
                })
            };

            status = expect.spyOn(res, 'status').andCallThrough();
        });

        it('should return a status of 200 and the user\'s id and name', () => {
           sign_in(req, res, {}, passport);
           expect(logIn).toHaveBeenCalled();
           expect(status).toHaveBeenCalledWith(200);
           expect(json).toHaveBeenCalledWith({
               id: user._id,
               name: user.local.username
           });
        });

    });

    describe('Given a request and response and passport, when passport throws an error', () => {

        let error, status, json;
        beforeEach(() => {
            error = new Error();
            passport = {
                authenticate: (strategy, fn) => {
                    fn(error, null, null);
                    return (req, res, next) => {};
                }
            };
            json = expect.createSpy();
            res = {
                status: () => ({
                    json: json
                })
            };

            status = expect.spyOn(res, 'status').andCallThrough();
        });

        it('should return a status of 200 and the user\'s id and name', () => {
            sign_in(req, res, {}, passport);
            expect(status).toHaveBeenCalledWith(500);
            expect(json).toHaveBeenCalledWith({
                field: 'username',
                error: error
            });
        });

    });

    describe('Given a request and response and passport, when passport is not successful in authenticating', () => {

        let info, status, json;
        beforeEach(() => {
            info = { message: 'error message' };
            passport = {
                authenticate: (strategy, fn) => {
                    fn(null, null, info);
                    return (req, res, next) => {};
                }
            };
            json = expect.createSpy();
            res = {
                status: () => ({
                    json: json
                })
            };

            status = expect.spyOn(res, 'status').andCallThrough();
        });

        it('should return a status of 200 and the user\'s id and name', () => {
            sign_in(req, res, {}, passport);
            expect(status).toHaveBeenCalledWith(500);
            expect(json).toHaveBeenCalledWith({
                field: 'username',
                error: info.message
            });
        });

    });



});