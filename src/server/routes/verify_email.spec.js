import expect from 'expect';
import { verifyEmail, __RewireAPI__ } from './verify_email';

describe('src/server/routes/verifyEmail', () => {
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

    });
});