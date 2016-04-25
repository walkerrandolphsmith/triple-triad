import expect from 'expect';
import { FORGOT_PASSWORD_FORM_ERROR } from './../../../constants/actionTypes';
import { forgotPasswordFormError } from './forgotPasswordFormError';

describe('src/shared/actions/action-creators/forgotPasswordFormError', () => {
    describe('Given FORGOT_PASSWORD_FORM_ERROR action type', () => {
        let payload;
        let expectedAction;
        beforeEach(() => {
            payload = {
                field: 'email',
                error: 'This user does not exist'
            };
            expectedAction = {
                type: FORGOT_PASSWORD_FORM_ERROR,
                payload: payload
            };
        });
        
        describe('When invoking the forgotPasswordFormError action creator', () => {
            it('should create an action', () => {
                expect(forgotPasswordFormError(payload)).toEqual(expectedAction);
            });
            
            it('should set its first parameter to the payload', () => {
                expect(forgotPasswordFormError(payload).payload).toEqual(payload);
            });
        });
    });
});