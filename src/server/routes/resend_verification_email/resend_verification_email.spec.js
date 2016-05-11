import expect from 'expect';
import { resendVerificationEmail, __RewireAPI__ } from './resend_verification_email';

describe('src/server/routes/resendVerificationEmail', () => {
    let req;
    let res;
    describe('Given a request containing a user id and a response', () => {
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
            resendVerificationEmail(req, res);
        });
    });
});