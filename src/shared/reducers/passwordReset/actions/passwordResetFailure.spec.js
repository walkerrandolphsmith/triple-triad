import expect from 'expect';
import { PASSWORD_RESET_FAILED, passwordResetFailure } from './../index';

describe('src/shared/reducers/passwordReset/actions/passwordResetFailed', () => {
    describe('Given PASSWORD_RESET_FAILURE action type', () => {
        describe('When invoking the passwordResetFailed action creator', () => {
            it('should create an action', () => {
                const expectedAction = {
                    type: PASSWORD_RESET_FAILED
                };
                expect(passwordResetFailure()).toEqual(expectedAction);
            });
        });
    });
});