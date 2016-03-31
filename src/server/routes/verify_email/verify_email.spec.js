import expect from 'expect';
import { verifyEmail, __RewireAPI__ } from './verify_email';

describe('verifyEmail', () => {
    let req;
    let res;
    let token;
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
                __RewireAPI__.__Rewire__('Token', {
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