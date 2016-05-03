import expect from 'expect';
import { AUTH_SIGNIN, requestSignIn } from './../auth';

describe('src/shared/reducers/auth/actions/requestSignIn', () => {
    describe('Given AUTH_SIGNIN action type', () => {
        describe('When invoking the requestSignIn action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: AUTH_SIGNIN
                };
                expect(requestSignIn()).toEqual(expectedAction);
            });
        });
    });
});