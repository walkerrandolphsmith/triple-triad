import expect from 'expect';
import { sign_in } from './sign_in';

describe('sign_in', () => {

    let req, res, passport;

    describe('Given a request and response and passport, when passport successfully authenticates', () => {

        let user, status, json;
        beforeEach(() => {
            user = { _id: 20, local: { username: 'tester' } };
            passport = {
                authenticate: (strategy, fn) => {
                    fn(null, user, null);
                    return (req, res, next) => {};
                }
            };

            req = {};

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
           expect(status).toHaveBeenCalledWith(200);
           expect(json).toHaveBeenCalledWith({
               id: user._id,
               name: user.local.username
           });
        });

    });

});