import expect from 'expect';
import Verify_Email from './verify_email';
import { verifyEmail, __RewireAPI__ as verify_emailRewireAPI } from './verify_email';

describe('verifyEmail', () => {

    let req, res, token;
    beforeEach(() => {
        token = 20;
        req = {
            body: {
                token: token
            }
        };
    });

    describe('Given a request containing a token, and a response', () => {

        describe('When retrieving a token', () => {
            let findOne;
            beforeEach(() => {
                res = {};
                findOne = expect.createSpy();
                Verify_Email.__Rewire__('Token', {
                    findOne: findOne
                });
                verifyEmail(req, res);
            });

            it('should look up the user token', () => {
                expect(findOne).toHaveBeenCalled();
            });
        });
    });
});