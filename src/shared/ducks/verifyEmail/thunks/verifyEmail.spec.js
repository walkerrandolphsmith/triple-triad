import expect from 'expect';
import { verifyEmail } from './verifyEmail';

describe('src/shared/reducers/verifyEmail/thunks/verifyEmail', () => {
    let token;
    beforeEach(() => {
        token = 'token';
    });

    it('should be a function', () => {
        expect(verifyEmail(token)).toBeA('function');
    });
});