import expect from 'expect';
import { SIGN_IN_FORM_ERROR } from './../../../constants/actionTypes';
import { signinFormError } from './signinFormError';

describe('src/shared/actions/action-creators/signinForm/signinFormError', () => {
    describe('Given SIGN_IN_FORM_ERROR action type', () => {
        let payload;
        let expectedAction;
        beforeEach(() => {
            payload = {
                field: 'username',
                error: 'invalid username'
            };
            expectedAction = {
                type: SIGN_IN_FORM_ERROR,
                payload: payload
            };
        });

        describe('When invoking the signinFormError action creator', () => {
            it('should create an action', () => {
                expect(signinFormError(payload)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload', () => {
                expect(signinFormError(payload).payload).toEqual(payload);
            });
        });
    });
});