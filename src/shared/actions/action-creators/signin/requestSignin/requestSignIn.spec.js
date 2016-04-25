import expect from 'expect';
import { AUTH_SIGNIN } from './../../../../constants/actionTypes';
import { requestSignIn } from './requestSignIn';

describe('src/shared/actions/action-creators/signin/requestSignIn', () => {
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