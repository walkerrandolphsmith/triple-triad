import expect from 'expect';
import { SIGN_UP_FORM_ERROR } from './../../../constants/actionTypes';
import { signUpFormError } from './signUpFormError';

describe('src/shared/actions/action-creators/signupFormError', () => {
    describe('Given SIGN_UP_FORM_ERROR action type', () => {
        let payload;
        let expectedAction;
        beforeEach(() => {
            payload = {
                field: 'username',
                error: 'invalid username'
            };
            expectedAction = {
                type: SIGN_UP_FORM_ERROR,
                payload: payload
            };
        });

        describe('When invoking the signUpFormError action creator', () => {
            it('should create an action', () => {
                expect(signUpFormError(payload)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload', () => {
                expect(signUpFormError(payload).payload).toEqual(payload);
            });
        });
    });
});