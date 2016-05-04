import expect from 'expect';
import { verifyEmail } from './../index';

describe('VERIFY EMAIL async action creator', () => {
    let token;
    beforeEach(() => {
        token = 'token';
    });

    it('should be a function', () => {
        expect(verifyEmail(token)).toBeA('function');
    });
});