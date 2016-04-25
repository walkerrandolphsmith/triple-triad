import expect from 'expect';
import { RESET_PASSWORD_FORM_ERROR } from './../../../constants/actionTypes';
import { resetPasswordFormError } from './resetPasswordFormError';

describe('src/shared/actions/action-creators/resetPasswordFormError', () => {
    describe('Given RESET_PASSWORD_FORM_ERROR action type', () => {
        let payload;
        let expectedAction;
        beforeEach(() => {
            payload = {
                field: 'username',
                error: 'invalid username'
            };
            expectedAction = {
                type: RESET_PASSWORD_FORM_ERROR,
                payload: payload
            };
        });

        describe('When invoking the placeCard action creator', () => {
            it('should create an action', () => {
                expect(resetPasswordFormError(payload)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload', () => {
                expect(resetPasswordFormError(payload).payload).toEqual(payload);
            });
        });
    });
});