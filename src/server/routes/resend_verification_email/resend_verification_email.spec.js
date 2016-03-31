import expect from 'expect';
import { resendVerificationEmail, __RewireAPI__ } from './resend_verification_email';

describe('/api/resendVerificationEmail', () => {
    let req;
    let res;
    describe('Given a request containing a user id and a response', () => {
        let findOne = expect.createSpy();
        beforeEach(() => {
            req = {
                body: {
                    userId: 20
                }
            };
            res = {
                status: function() {
                    return this;
                },
                send: function() {
                    return this;
                }
            };
            __RewireAPI__.__Rewire__('Token', {
                findOne: findOne
            });

            resendVerificationEmail(req, res);
        });

        it('should try to find one token', () => {
            expect(findOne).toHaveBeenCalled();
        });
    });
});