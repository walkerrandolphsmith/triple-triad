import expect from 'expect';
import ResendVerificationEmail from './resend_verification_email';
import { resendVerificationEmail, __RewireAPI__ as resend_verification_emailRewireAPI } from './resend_verification_email';

describe('/api/resendVerificationEmail', () => {

    let req, res;

    describe('Given a request containing a user id and a response', () => {

        let findOne = expect.createSpy();
        beforeEach(() => {
            req = {
                body: {
                    userId: 20
                }
            };
            res = {
                status: function() { return this; },
                send: function() { return this; }
            };
            ResendVerificationEmail.__Rewire__('Token', {
                findOne: findOne
            });

            resendVerificationEmail(req, res);
        });

        it('should try to find one token', () => {
           expect(findOne).toHaveBeenCalled();
        });
    });
});